import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import Swal from 'sweetalert2';
import { signUpUser } from '../redux/CurrentUser/CurrentUserSlice';

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
        timer: 2000,
      });
      navigate('/');
    }
  }, [currentUser, navigate]);
  const handleSignup = (e) => {
    e.preventDefault();
    const [name, email, password, passwordConf] = document.getElementById('form').elements;
    if (password.value !== passwordConf.value) {
      passwordConf.setCustomValidity("Passwords Don't Match");
    } else {
      passwordConf.setCustomValidity('');
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
    <Form validated={validated} id="form" onSubmit={handleSignup}>
      <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control required type="text" name="name" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control required type="email" name="email" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>
          Password (It should have at least 1 capital letter, 1 symbol, and 1 number)
        </Form.Label>
        <Form.Control required type="password" name="password" pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$" />
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
