import { NavLink } from 'react-router-dom';

const RootLayout = () => (
  <div className="root-layout">
    <nav>
      <ul>
        <li>
          <NavLink to="/investigators">Investigators</NavLink>
        </li>
        <li>
          <NavLink to="/create-investigator">Add New Investigator</NavLink>
        </li>
        <li>
          <NavLink to="/appointments">My Appointments</NavLink>
        </li>
        <li>
          <NavLink to="/create-appointment">Book an Appointment</NavLink>
        </li>
        <li>
          <NavLink to="/create-appointment">Book an Appointment</NavLink>
        </li>
      </ul>
    </nav>
  </div>
);

export default RootLayout;
