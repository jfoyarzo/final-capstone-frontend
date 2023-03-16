import React from 'react';
import PropTypes from 'prop-types';
import { FaFacebookF, FaTwitter } from 'react-icons/fa';
import { TiSocialInstagram } from 'react-icons/ti';

const InvestigatorCard = (props) => {
  const {
    name, image, description, socials,
  } = props;
  return (
    <>
      <img src={image} alt={name} />
      <div className="investigator-card__info">
        <h3>{name}</h3>
        <hr style={{ borderStyle: 'dotted', borderBottom: '1px solid black' }} />
        <p>{description}</p>
        <ul className="social-icons">
          <li><a href={socials.facebook} aria-label="Facebook"><FaFacebookF /></a></li>
          <li><a href={socials.twitter} aria-label="Twitter"><FaTwitter /></a></li>
          <li><a href={socials.instagram} aria-label="Instagram"><TiSocialInstagram /></a></li>
        </ul>
      </div>
    </>
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
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  socials: PropTypes.shape({
    twitter: PropTypes.string,
    facebook: PropTypes.string,
    instagram: PropTypes.string,
  }),
};

export default InvestigatorCard;
