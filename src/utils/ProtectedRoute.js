/* eslint-disable react/prop-types */
import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import Swal from 'sweetalert2';

const ProtectedRoute = ({ children }) => {
  const user = useSelector((state) => state.userReducer);
  const location = useLocation();

  if (!user.email) {
    Swal.fire({
      position: 'top',
      icon: 'warning',
      title: 'You must sign up or sign in to continue',
      showConfirmButton: true,
      confirmButtonColor: '#0d6efd',
    });
    return <Navigate to="/" state={{ from: location }} replace />;
  }
  return children;
};

export default ProtectedRoute;
