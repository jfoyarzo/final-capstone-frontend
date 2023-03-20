import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import { signUpUser } from '../redux/CurrentUser/CurrentUserSlice';

const Signup = () => {
  const currentUser = useSelector((state) => state.userReducer);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSignup = (e) => {
    e.preventDefault();
    const [name, email, password, passwordConf] = document.getElementById('form').elements;
    dispatch(signUpUser({
      name: name.value,
      email: email.value,
      password: password.value,
      password_confirmation: passwordConf,
    }));
    if (currentUser.email) {
      navigate('/');
    }
  };
  return (
    <Form id="form" onSubmit={handleSignup}>
      <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" name="name" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" name="email" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="password" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control type="password" name="passwordConf" />
      </Form.Group>
      <Button type="submit">
        Login
      </Button>
    </Form>
  );
};

export default Signup;
