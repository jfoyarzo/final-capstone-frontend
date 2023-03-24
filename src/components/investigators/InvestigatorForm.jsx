import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { Form, Button } from 'react-bootstrap';
import { createInvestigator } from '../../redux/InvestigatorForm/investigatorFormSlice';
import { fetchInvestigators } from '../../redux/investigators/investigatorSlice';

const InvestigatorForm = () => {
  const [state, setState] = useState({
    name: '',
    photo: '',
    description: '',
    fee: 0,
    rating: 0,
  });
  const cInvestigator = useSelector((state) => state.createInvestigatorsReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (cInvestigator.status === 'succeeded') {
      Swal.fire({
        position: 'top',
        icon: 'success',
        title: 'Investigator created successfully!',
        showConfirmButton: false,
        timer: 2000,
      });
      dispatch(fetchInvestigators());
      navigate('/app/investigators');
    }
  }, [cInvestigator, navigate, dispatch]);

  const handleChange = (event, name) => {
    if (name === 'name' || name === 'photo' || name === 'description' || name === 'fee' || name === 'rating') {
      setState((state) => ({
        ...state,
        [name]: event.target.value,
      }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (state.name && state.photo && state.description && state.fee && state.rating) {
      dispatch(createInvestigator({ ...state }));
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
        className="d-flex flex-column justify-content-center align-items-center opacity-75"
        style={{
          height: '100vh',
          backgroundColor: '#97BF0F',
          color: 'white',
        }}
      >
        <h1>Add an Investigator</h1>
        <hr className="border border-2 w-25" />
        <p className="mb-5">Use the following form to add a new investigator.</p>
        <Form onSubmit={handleSubmit} className="row gap-3">
          <Form.Control className="col rounded-pill border border-white text-white py-3 px-3" style={{ backgroundColor: '#97BF0F' }} placeholder="Name" type="text" value={state.name} required onChange={(e) => handleChange(e, 'name')} />
          <Form.Control className="col rounded-pill border border-white text-white py-3 px-3" style={{ backgroundColor: '#97BF0F' }} placeholder="Photo link" type="text" value={state.photo} required onChange={(e) => handleChange(e, 'photo')} />
          <Form.Control className="col rounded-pill border border-white text-white py-3 px-3" style={{ backgroundColor: '#97BF0F' }} placeholder="Description" type="text" value={state.description} required onChange={(e) => handleChange(e, 'description')} />
          <Form.Control className="col rounded-pill border border-white text-white py-3 px-3" style={{ backgroundColor: '#97BF0F' }} placeholder="Fee" type="number" value={state.fee} required onChange={(e) => handleChange(e, 'fee')} />
          <Form.Control className="col rounded-pill border border-white text-white py-3 px-3" style={{ backgroundColor: '#97BF0F' }} placeholder="Rating" type="number" value={state.rating} required onChange={(e) => handleChange(e, 'rating')} />
          <Button type="submit" className="rounded-pill border border-white" style={{ backgroundColor: 'white', color: '#97BF0F', fontWeight: 'bold' }}>Submit</Button>
        </Form>
      </div>
    </div>
  );
};

export default InvestigatorForm;
