import React from 'react';
import { useDispatch } from 'react-redux';
import { getUser } from '../redux/CurrentUser/CurrentUserSlice';

const Login = () => {
  const dispatch = useDispatch();
  const handleLogin = (e) => {
    e.preventDefault();
    const [email, password] = document.getElementById('form').elements;
    console.log(email.value);
    console.log(password.value);
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
      <button type="submit" onClick={handleLogin}>
        Login
      </button>
    </form>
  );
};

export default Login;
