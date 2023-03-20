import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { getUser } from '../redux/CurrentUser/CurrentUserSlice';

const Login = () => {
  const currentUser = useSelector((state) => state.userReducer);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    if (currentUser.email) {
      Swal.fire({
        position: 'top',
        icon: 'success',
        title: 'You are logged in!',
        showConfirmButton: false,
        timer: 2000,
      });
      navigate('/');
    } else if (currentUser.error) {
      Swal.fire({
        position: 'top',
        icon: 'error',
        title: 'Invalid email or password',
        showConfirmButton: false,
        timer: 2000,
      });
    }
  }, [currentUser, navigate]);

  const handleLogin = (e) => {
    e.preventDefault();
    const [email, password] = document.getElementById('form').elements;
    dispatch(getUser({ email: email.value, password: password.value }));
  };

  return (
    <form id="form" onSubmit={handleLogin}>
      <label htmlFor="email">
        Email
        <input type="email" name="email" />
      </label>
      <label htmlFor="password">
        Password
        <input type="password" htmlFor="password" />
      </label>
      <button type="submit">
        Login
      </button>
    </form>
  );
};

export default Login;
