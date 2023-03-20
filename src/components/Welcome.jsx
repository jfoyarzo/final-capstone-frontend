import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Welcome = () => (
  <section>
    <div className="d-flex flex-column align-items-center ">
      <h1>Welcome!</h1>
      <div>
        <Link to="/signup">
          <Button>Sign up</Button>
        </Link>
        <Link to="/login">
          <Button>Sign in</Button>
        </Link>
      </div>
    </div>
  </section>
);

export default Welcome;
