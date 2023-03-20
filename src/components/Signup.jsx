import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import { signUpUser } from '../redux/CurrentUser/CurrentUserSlice';
import Swal from 'sweetalert2';


const Signup = () => {
  const currentUser = useSelector((state) => state.userReducer);
  const [validated, setValidated] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    if (currentUser.email) {
      Swal.fire({
        position: 'top',
        icon: 'success',
        title: 'Welcome, you are signed up and logged in!',
        showConfirmButton: false,
        timer: 2000
      })
      navigate('/');
    }
  }, [currentUser, navigate]);
  const handleSignup = (e) => {
    e.preventDefault();
    const [name, email, password, passwordConf] = document.getElementById('form').elements;
    if (password.value !== passwordConf.value) {
      Swal.fire({
        position: 'top',
        icon: 'error',
        title: 'Passwords do not match',
        showConfirmButton: false,
        timer: 2000
      })
      return;
    }
    dispatch(signUpUser({
      name: name.value,
      email: email.value,
      password: password.value,
      password_confirmation: passwordConf,
    }));
    setValidated(true);
  };
  return (
    <Form noValidate validated={validated} id="form" onSubmit={handleSignup}>
      <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control required type="text" name="name" />
        <Form.Control.Feedback type="invalid">
          Please enter a name between 2 and 100 characters.
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control required type="email" name="email" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control required type="password" name="password" />
        <Form.Control.Feedback type="invalid">
          Please enter a password of at least 8 characters, 1 uppercase, 1 lowercase, 1 number, 1 special character.
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control required type="password" name="passwordConf" />
      </Form.Group>
      <Button type="submit">
        Sign up
      </Button>
    </Form>
  );
};

export default Signup;
