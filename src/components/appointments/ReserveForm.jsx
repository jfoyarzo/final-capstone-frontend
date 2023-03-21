import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { nanoid } from '@reduxjs/toolkit';
import { createAppointment } from '../../redux/Appointments/appointmentsSlice';

const ReserveForm = () => {
  const { id } = useParams();
  console.log(id);
  const [state, setState] = useState({ date: '', text: '' });
  const dispatch = useDispatch();

  const currentUser = useSelector((state) => state.userReducer);
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

  const investigators = useSelector((state) => state.investigators.value);
  return (
    <div>
      <h1>Make an appointment</h1>
      <hr />
      <p>Our investigators are amazing, you need to book one now!!!</p>
      <form onSubmit={handleSubmit}>
        <input type="text" value={currentUser.name} required disabled />
        <input type="date" value={state.date} required onChange={(e) => handleChange(e, 'date')} />
        <input type="text" value={state.text} required onChange={(e) => handleChange(e, 'text')} />
        {investigators.map((i) => {
          if (i.id === id) {
            return (
              <option key={nanoid()} value="volvo">{i.name}</option>
            );
          }
          return (
            <option key={nanoid()} value="volvo">{i.name}</option>
          );
        })}
        ;
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ReserveForm;
