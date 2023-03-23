import { Outlet, NavLink } from 'react-router-dom';
import '../assets/stylesheets/nav.css';
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import { useSelector, useDispatch } from 'react-redux';
import {
  FaTwitter, FaFacebookF, FaVimeoV, FaPinterestP,
} from 'react-icons/fa';
import { TiSocialInstagram } from 'react-icons/ti';
import { Button } from 'react-bootstrap';
import React, { useEffect } from 'react';
import { fetchInvestigators } from '../redux/investigators/investigatorSlice';
import { signOutUser } from '../redux/CurrentUser/CurrentUserSlice';
import logo from '../assets/images/logo.png';

const Layout = () => {
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
      <nav className="navbar navbar-light bg-light flex-column">
          <img src={logo} alt="P.I. logo" style={{height: '2rem', width: '2rem'}} className="my-4 border border-dark rounded-circle"/>
          <ul className="navbar-nav flex-column">
            <li className='nav-item'>
              <NavLink to="/app/investigators" className='nav-link'>Home</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to="/app/appointments" className='nav-link'>My Appointments</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to="/app/investigators/:id/reserve" className='nav-link'>Book an Appointment</NavLink>
            </li>
            <hr />
            { currentUser.admin
            && (
              <>
                <li className='nav-item'>
                  <NavLink to="/app/add_investigator" className='nav-link'>Add an Investigator</NavLink>
                </li>
                <li className='nav-item'>
                  <NavLink to="/app/delete-investigator/:id" className='nav-link'>Delete Investigator</NavLink>
                </li>
              </>
            )}
            <Button onClick={handleLogout} variant="danger">Logout</Button>
          </ul>
          <div>
            <ul className="navbar-nav flex-row">
              <li><a href="https://www.twitter.com" aria-label="Twitter" className='nav-link'><FaTwitter /></a></li>
              <li><a href="https://www.facebook.com" aria-label="Facebook" className='nav-link'><FaFacebookF /></a></li>
              <li><a href="https://www.instagram.com" aria-label="Instagram" className='nav-link'><TiSocialInstagram /></a></li>
              <li><a href="https://www.vimeo.com" aria-label="Vimeo" className='nav-link'><FaVimeoV /></a></li>
              <li><a href="https://www.pinterest.com" aria-label="Pinterest" className='nav-link'><FaPinterestP /></a></li>
            </ul>
            <footer>
              <p className='fst-italic fw-light'><small>
                &copy; 2023 Mátyás Gombos, Waris Haleem, Chris Clothier,
                Felipe Oyarzo and Emmanuel Orji-Ihuoma
              </small></p>
            </footer>
          </div>
      </nav>
      <Outlet />
    </div>
  );
};

export default Layout;