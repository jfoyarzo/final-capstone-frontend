import { Link } from 'react-router-dom';

// eslint-disable-next-line no-unused-vars, arrow-body-style
const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/add-investigator">Add New Investigator</Link>
        </li>
        <li>
          <Link to="/my-reservations">My Reservations</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
