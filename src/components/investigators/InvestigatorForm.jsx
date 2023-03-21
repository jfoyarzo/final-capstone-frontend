import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createAppointment } from '../../redux/Appointments/appointmentsSlice';

const InvestigatorForm = () => {
  const [state, setState] = useState({
    name: '',
    photo: '',
    description: '',
    fee: 0,
    rating: 0,
  });
  const dispatch = useDispatch();

  const handleChange = (event, name) => {
    setState((state) => ({
      ...state,
      [name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (state.date && state.text) {
      dispatch(createAppointment({ investigator: state }));
    }
  };

  return (
    <div>
      <h1>Add an Investigator</h1>
      <hr />
      <p>Please use the following for to add you new investigator to the system.</p>
      <form onSubmit={handleSubmit}>
        <input placeholder="Name" type="text" value={state.name} required onChange={(e) => handleChange(e, 'name')} />
        <input placeholder="Photo link" type="text" value={state.photo} required onChange={(e) => handleChange(e, 'photo')} />
        <input placeholder="Description" type="text" value={state.description} required onChange={(e) => handleChange(e, 'description')} />
        <input placeholder="Fee" type="number" value={state.fee} required onChange={(e) => handleChange(e, 'fee')} />
        <input placeholder="Rating" type="number" value={state.rating} required onChange={(e) => handleChange(e, 'rating')} />
        <button type="submit">Submit</button>
      </form>
    </div>

  );
};

export default InvestigatorForm;
