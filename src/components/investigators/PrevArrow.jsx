import React from 'react';
import { BiLeftArrow } from 'react-icons/bi';
import PropTypes from 'prop-types';

const PrevArrow = (props) => {
  const { disabled, onClick } = props;
  return (
    <div
      className="left-arrow slick-arrow"
      role="presentation"
      onClick={onClick}
      style={{ background: disabled ? '#efefef' : '#97bf0f', cursor: disabled ? 'default' : 'pointer' }}
    >
      <BiLeftArrow />
    </div>
  );
};

PrevArrow.defaultProps = {
  onClick: () => {},
};

PrevArrow.propTypes = {
  disabled: PropTypes.bool.isRequired,
  onClick: PropTypes.func,
};

export default PrevArrow;
