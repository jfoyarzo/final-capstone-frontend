import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import Swal from 'sweetalert2';
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
    if (appointments.status === 'deleted') {
      Swal.fire({
        position: 'top',
        icon: 'success',
        title: 'Appointment deleted successfully!',
        showConfirmButton: false,
        timer: 2000,
      });
    }
  }, [dispatch, appointments.status, investigators.status]);

  const handleDelete = (event) => {
    dispatch(deleteAppointment(event.target.id));
  };

  return (
    <div className="w-100 d-flex flex-column align-items-center">
      <h1 className="mt-2 mb-4">Appointments</h1>
      <table className="table table-light table-striped" style={{ width: ' 80%' }}>
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
              <td>{(appointment.date).slice(0, 10)}</td>
              <td><button className="rounded-pill border border-white bg-primary text-white py-1 px-3" type="button" onClick={handleDelete} id={appointment.id}>Cancel</button></td>
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
