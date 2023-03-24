import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { createAppointment } from '../redux/Appointments/appointmentsSlice';

const ReserveForm = () => {
  const { id } = useParams();
  const [state, setState] = useState({ date: '', text: '' });
  const dispatch = useDispatch();

  const handleChange = (event, name) => {
    if (name === 'date' || name === 'text') {
      setState((state) => ({
        ...state,
        [name]: event.target.value,
      }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (state.date && state.text) {
      dispatch(createAppointment({ ...state, user_id: id }));
    }
  };

  return (
    <div>
      <h1>Make an appointment</h1>
      <hr />
      <p>Our investigators are amazing, you need to book one now!!!</p>
      <form onSubmit={handleSubmit} data-testid="form">
        <input type="date" value={state.date} required onChange={(e) => handleChange(e, 'date')} />
        <input type="text" value={state.text} required onChange={(e) => handleChange(e, 'text')} />
        <button type="submit">Submit</button>
      </form>
    </div>

  );
};

export default ReserveForm;
