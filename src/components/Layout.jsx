import { Outlet, NavLink } from 'react-router-dom';
import '../assets/stylesheets/nav.css';

const Layout = () => (
  <div className="layout">
    <nav>
      <ul>
        <li>
          <NavLink to="/investigators">Investigators</NavLink>
        </li>
        <li>
          <NavLink to="/add-investigator">Add an Investigator</NavLink>
        </li>
        <li>
          <NavLink to="/appointments">My Appointments</NavLink>
        </li>
        <li>
          <NavLink to="/add-appointment">Book an Appointment</NavLink>
        </li>
        <li>
          <NavLink to="/delete-investigator/:id">Delete Investigator</NavLink>
        </li>
      </ul>
    </nav>
    <Outlet />
  </div>
);

export default Layout;
