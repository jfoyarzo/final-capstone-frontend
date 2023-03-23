import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { deleteAppointment, fetchAppointments } from '../../redux/Appointments/appointmentsSlice';
import { fetchInvestigators } from '../../redux/investigators/investigatorSlice';

const Appointments = () => {
  const appointments = useSelector((state) => state.appointments);
  const investigators = useSelector((state) => state.investigators);
  const dispatch = useDispatch();
  useEffect(() => {
    if (appointments.status !== 'fetched') {
      dispatch(fetchAppointments());
    }
    if (investigators.status !== 'fetched') {
      dispatch(fetchInvestigators());
    }
  }, [dispatch, appointments.status, investigators.status]);

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
        {
          investigators.status === 'fetched' && appointments.status === 'fetched'
        && (
        <tbody>
          {appointments.value.map((appointment) => (
            <tr key={nanoid()}>
              <td>
                {investigators.value.find(({ id }) => id === appointment.investigator_id).name}
              </td>
              <td>{appointment.city}</td>
              <td>{appointment.date}</td>
              <td><button type="button" onClick={handleDelete} id={appointment.id}>Cancel</button></td>
            </tr>
          ))}
        </tbody>
        )
        }
      </table>
    </div>
  );
};

export default Appointments;