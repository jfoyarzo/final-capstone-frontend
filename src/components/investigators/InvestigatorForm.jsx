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
    <div>
      <h1>Add an Investigator</h1>
      <hr />
      <p>Use the following form to add a new investigator.</p>
      <Form onSubmit={handleSubmit}>
        <Form.Control placeholder="Name" type="text" value={state.name} required onChange={(e) => handleChange(e, 'name')} />
        <Form.Control placeholder="Photo link" type="text" value={state.photo} required onChange={(e) => handleChange(e, 'photo')} />
        <Form.Control placeholder="Description" type="text" value={state.description} required onChange={(e) => handleChange(e, 'description')} />
        <Form.Control placeholder="Fee" type="number" value={state.fee} required onChange={(e) => handleChange(e, 'fee')} />
        <Form.Control placeholder="Rating" type="number" value={state.rating} required onChange={(e) => handleChange(e, 'rating')} />
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
};

export default InvestigatorForm;
