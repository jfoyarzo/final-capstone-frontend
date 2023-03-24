import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { nanoid } from '@reduxjs/toolkit';
import { Form, Button } from 'react-bootstrap';
import Swal from 'sweetalert2';
import { createAppointment } from '../../redux/Appointments/appointmentsSlice';
import { fetchInvestigators } from '../../redux/investigators/investigatorSlice';
import './ReserveForm.css';

const ReserveForm = () => {
  const { id } = useParams();
  const initialValue = id === ':id' ? 'default' : parseInt(id, 10);
  const [state, setState] = useState({ date: '', city: '', investigator_id: id });
  const [selected, setSelected] = useState(initialValue);
  const appointments = useSelector((state) => state.appointments);
  const investigators = useSelector((state) => state.investigators.value);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (appointments.status === 'succeeded') {
      Swal.fire({
        position: 'top',
        icon: 'success',
        title: 'Appointment created successfully!',
        showConfirmButton: false,
        timer: 2000,
      });
      navigate('/app/appointments');
    }

    if (investigators.status !== 'fetched') {
      dispatch(fetchInvestigators());
    }
  }, [appointments.status, investigators.status, navigate, dispatch]);

  const currentUser = useSelector((state) => state.userReducer);
  const handleChange = (event, name) => {
    if (name === 'date' || name === 'city') {
      setState((state) => ({
        ...state,
        [name]: event.target.value,
      }));
    }

    if (name === 'investigator_id') {
      setState((state) => ({ ...state, investigator_id: event.target.value }));
      setSelected(event.target.value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (state.date && state.city && state.investigator_id) {
      dispatch(createAppointment({ ...state }));
    }
  };
  return (
    <div
      className=""
      style={{
        backgroundImage: 'url("https://mdbootstrap.com/img/Photos/Others/images/76.jpg")',
        height: '100vh',
        width: '100%',
      }}
    >
      <div
        className="d-flex flex-column justify-content-center align-items-center bg-primary opacity-75"
        style={{
          height: '100vh',
        }}
      >
        <h1>Make an appointment</h1>
        <hr className="border border-2 w-25" />
        <p className="mb-5">Our investigators are amazing, you need to book one now!!!</p>
        <Form onSubmit={handleSubmit} className="row gap-3">
          <Form.Control className="col rounded-pill border border-white bg-primary text-white py-3 px-3" type="text" value={currentUser.name} required disabled />
          <Form.Control className="col rounded-pill border border-white bg-primary text-white py-3 px-3" type="date" value={state.date} required onChange={(e) => handleChange(e, 'date')} />
          <Form.Control className="city-input col rounded-pill border border-white bg-primary text-white py-3 px-3" type="text" value={state.city} placeholder="City" required onChange={(e) => handleChange(e, 'city')} />
          <Form.Select className="col rounded-pill border border-white bg-primary text-white py-3 px-3" aria-label="Investigators list" value={selected} onChange={(e) => handleChange(e, 'investigator_id')}>
            <option
              value="default"
              disabled
              hidden
            >
              Select an Investigator
            </option>
            {investigators.map((i) => (
              <option
                key={nanoid()}
                value={i.id}
              >
                {i.name}
              </option>
            ))}
          </Form.Select>
          <Button type="submit">Submit</Button>
        </Form>
      </div>
    </div>
  );
};
export default ReserveForm;
