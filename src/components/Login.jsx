import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getUser } from '../redux/CurrentUser/CurrentUserSlice';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogin = (e) => {
    e.preventDefault();
    const [email, password] = document.getElementById('form').elements;
    dispatch(getUser({ email: email.value, password: password.value }));
    navigate('/');
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
      <button type="submit" onClick={handleLogin}>
        Login
      </button>
    </form>
  );
};

export default Login;
