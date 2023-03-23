import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { deleteAppointment, fetchAppointments } from '../../redux/Appointments/appointmentsSlice';

const Appointments = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAppointments());
  }, [dispatch]);

  const handleDelete = (event) => {
    dispatch(deleteAppointment(event.target.id));
  };

  const appointments = useSelector((state) => state.appointments);
  const investigators = useSelector((state) => state.investigators.value);
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
          {appointments.value.map((appointment) => {
            const investigator = investigators.find(({ id }) => id === appointment.investigator_id);
            return (
              <tr key={nanoid()}>
                <td>{investigator.name}</td>
                <td>{appointment.city}</td>
                <td>{appointment.date}</td>
                <td><button type="button" onClick={handleDelete} id={appointment.id}>Cancel</button></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Appointments;
