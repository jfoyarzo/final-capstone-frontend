import { Outlet, NavLink } from 'react-router-dom';
import '../assets/stylesheets/nav.css';
import { useSelector, useDispatch } from 'react-redux';
import {
  FaTwitter, FaFacebookF, FaVimeoV, FaPinterestP,
} from 'react-icons/fa';
import { TiSocialInstagram } from 'react-icons/ti';
import { Button } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import { fetchInvestigators } from '../redux/investigators/investigatorSlice';
import { signOutUser } from '../redux/CurrentUser/CurrentUserSlice';
import logo from '../assets/images/logo.png';

const Layout = () => {
  const [opened, setOpened] = useState(false);

  const closeHandler = () => {
    setOpened(false);
  };

  const openHandler = () => {
    setOpened(true);
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchInvestigators());
  }, [dispatch]);

  const handleLogout = () => {
    dispatch(signOutUser());
  };

  const currentUser = useSelector((state) => state.userReducer);
  return (
    <div className="layout">
      <nav className="desktop-nav column">
        <img src={logo} alt="P.I. logo" style={{ height: '2rem', width: '2rem' }} className="my-4" />
        <ul className="column">
          <li>
            <NavLink to="/app/investigators" className="nav-link">Home</NavLink>
          </li>
          <li>
            <NavLink to="/app/appointments" className="nav-link">My Appointments</NavLink>
          </li>
          <li>
            <NavLink to="/app/investigators/:id/reserve" className="nav-link">Book an Appointment</NavLink>
          </li>
          <hr />
          { currentUser.admin
            && (
              <>
                <li className="nav-item">
                  <NavLink to="/app/add_investigator" className="nav-link">Add an Investigator</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/app/delete-investigator/:id" className="nav-link">Delete Investigator</NavLink>
                </li>
              </>
            )}
          <Button onClick={handleLogout} variant="danger">Logout</Button>
        </ul>
        <div>
          <ul className="navbar-nav flex-row">
            <li><a href="https://www.twitter.com" aria-label="Twitter" className="nav-link"><FaTwitter /></a></li>
            <li><a href="https://www.facebook.com" aria-label="Facebook" className="nav-link"><FaFacebookF /></a></li>
            <li><a href="https://www.instagram.com" aria-label="Instagram" className="nav-link"><TiSocialInstagram /></a></li>
            <li><a href="https://www.vimeo.com" aria-label="Vimeo" className="nav-link"><FaVimeoV /></a></li>
            <li><a href="https://www.pinterest.com" aria-label="Pinterest" className="nav-link"><FaPinterestP /></a></li>
          </ul>
          <footer>
            <p className="fst-italic fw-light">
              <small>
                &copy; 2023 Mátyás, Waris, Chris,
                Felipe and Emmanuel
              </small>
            </p>
          </footer>
        </div>
      </nav>
      <nav className="mobile-nav column">
        {!opened && (
        <button
          className="hamburger column"
          onClick={openHandler}
          type="button"
        >
          <div className="line" />
          <div className="line" />
          <div className="line" />
        </button>
        )}

        {opened && (
          <button
            className="close"
            onClick={closeHandler}
            type="button"
          >
            <div className="line1" />
            <div className="line2" />
          </button>
        )}
        {opened && (
          <div className="overlay column">
            <img className="desk-nav-logo" src={logo} alt="app-logo" />
            <ul className="column">
              <li>
                <NavLink to="/app/investigators" className="nav-link" onClick={closeHandler}>Home</NavLink>
              </li>
              <li>
                <NavLink to="/app/appointments" className="nav-link" onClick={closeHandler}>My Appointments</NavLink>
              </li>
              <li>
                <NavLink to="/app/investigators/:id/reserve" className="nav-link" onClick={closeHandler}>Book an Appointment</NavLink>
              </li>
              <hr />
              { currentUser.admin
            && (
              <>
                <li className="nav-item">
                  <NavLink to="/app/add_investigator" className="nav-link" onClick={closeHandler}>Add an Investigator</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/app/delete-investigator/:id" className="nav-link" onClick={closeHandler}>Delete Investigator</NavLink>
                </li>
              </>
            )}
              <Button onClick={handleLogout} variant="danger">Logout</Button>
            </ul>
          </div>
        )}
      </nav>
      <Outlet />
    </div>
  );
};

export default Layout;
