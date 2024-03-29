import React from 'react';
import PropTypes from 'prop-types';
import { FaFacebookF, FaTwitter } from 'react-icons/fa';
import { TiSocialInstagram } from 'react-icons/ti';
import './InvestigatorCard.css';
import { NavLink } from 'react-router-dom';

const InvestigatorCard = (props) => {
  const {
    name, image, description, socials, id,
  } = props;
  return (
    <div className="investigator-card">
      <NavLink to={`/app/investigators/${id}`}>
        <img src={image} alt={name} className="border border-dark rounded-circle" />
      </NavLink>
      <div className="investigator-card__info">
        <NavLink to={`/app/investigators/${id}`} className="d-flex flex-column align-items-center" style={{ textDecoration: 'none', color: 'black' }}>
          <h3>{name}</h3>
          <hr style={{ borderStyle: 'dotted', borderBottom: '1px solid black' }} />
          <p>{description}</p>
        </NavLink>
        <ul className="social-icons d-flex">
          <li><a href={socials.facebook} aria-label="Facebook"><FaFacebookF /></a></li>
          <li><a href={socials.twitter} aria-label="Twitter"><FaTwitter /></a></li>
          <li><a href={socials.instagram} aria-label="Instagram"><TiSocialInstagram /></a></li>
        </ul>
      </div>
    </div>
  );
};

InvestigatorCard.defaultProps = {
  socials: {
    twitter: '#',
    facebook: '#',
    instagram: '#',
  },
};

InvestigatorCard.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  socials: PropTypes.shape({
    twitter: PropTypes.string,
    facebook: PropTypes.string,
    instagram: PropTypes.string,
  }),
};

export default InvestigatorCard;
