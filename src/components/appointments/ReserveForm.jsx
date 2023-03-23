import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { nanoid } from '@reduxjs/toolkit';
import { Form, Button } from 'react-bootstrap';
import Swal from 'sweetalert2';
import { createAppointment } from '../../redux/Appointments/appointmentsSlice';
import { fetchInvestigators } from '../../redux/investigators/investigatorSlice';

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

  const currentUser = useSelector((state) => state.current_user);
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
    <div>
      <h1>Make an appointment</h1>
      <hr />
      <p>Our investigators are amazing, you need to book one now!!!</p>
      <Form onSubmit={handleSubmit}>
        <Form.Control type="text" value={currentUser.name} required disabled />
        <Form.Control type="date" value={state.date} required onChange={(e) => handleChange(e, 'date')} />
        <Form.Control type="text" value={state.city} required onChange={(e) => handleChange(e, 'city')} />
        <Form.Select aria-label="Investigators list" value={selected} onChange={(e) => handleChange(e, 'investigator_id')}>

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
  );
};

export default ReserveForm;