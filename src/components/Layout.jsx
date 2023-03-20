import { Outlet, NavLink } from 'react-router-dom';
import '../assets/stylesheets/nav.css';
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import {
  FaTwitter, FaFacebookF, FaVimeoV, FaPinterestP,
} from 'react-icons/fa';
import { TiSocialInstagram } from 'react-icons/ti';

const Layout = () => (
  <div className="layout">
    <nav className="d-flex flex-column">
      <ul className="d-flex flex-column">
        <li>
          <NavLink to="/app/investigators">Home</NavLink>
        </li>
        <li>
          <NavLink to="/app/add-investigator">Add an Investigator</NavLink>
        </li>
        <li>
          <NavLink to="/app/appointments">My Appointments</NavLink>
        </li>
        <li>
          <NavLink to="/app/investigators/:id/reserve">Book an Appointment</NavLink>
        </li>
        <li>
          <NavLink to="/app/delete-investigator/:id">Delete Investigator</NavLink>
        </li>
      </ul>
      <ul className="social-icons">
        <li><a href="https://www.twitter.com" aria-label="Twitter"><FaTwitter /></a></li>
        <li><a href="https://www.facebook.com" aria-label="Facebook"><FaFacebookF /></a></li>
        <li><a href="https://www.instagram.com" aria-label="Instagram"><TiSocialInstagram /></a></li>
        <li><a href="https://www.vimeo.com" aria-label="Vimeo"><FaVimeoV /></a></li>
        <li><a href="https://www.pinterest.com" aria-label="Pinterest"><FaPinterestP /></a></li>
      </ul>
      <footer>
        <p>
          &copy; 2023 Mátyás Gombos, Waris Haleem, Chris Clothier,
          Felipe Oyarzo and Emmanuel Orji-Ihuoma
        </p>
      </footer>
    </nav>
    <Outlet />
  </div>
);

export default Layout;
