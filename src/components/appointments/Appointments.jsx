import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { deleteAppointment } from '../../redux/Appointments/appointmentsSlice';

const Appointments = () => {
  const appointments = useSelector((state) => state.appointments);
  const dispatch = useDispatch();

  const handleDelete = (event) => {
    dispatch(deleteAppointment(event.target.id));
  };

  return (
    <div>
      <h1>Appointments</h1>
      <table>
        <thead>
          <tr>
            <th>Investigator</th>
            <th>City</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {appointments.value.map((appointment) => (
            <tr key={nanoid()}>
              <td>{appointment.investigator.name}</td>
              <td>{appointment.city}</td>
              <td>{appointment.date}</td>
              <td><button type="button" onClick={handleDelete} id={appointment.id}>Cancel</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Appointments;
