import React from 'react';
import { BiRightArrow } from 'react-icons/bi';
import PropTypes from 'prop-types';

const NextArrow = (props) => {
  const { disabled, onClick } = props; // [disabled] is the same as props[0]
  return (
    <div
      className="right-arrow slick-arrow"
      role="presentation"
      onClick={onClick}
      style={{ background: disabled ? '#efefef' : '#97bf0f', cursor: disabled ? 'default' : 'pointer' }}
    >
      <BiRightArrow />
    </div>
  );
};

NextArrow.defaultProps = {
  onClick: () => {},
};

NextArrow.propTypes = {
  disabled: PropTypes.bool.isRequired,
  onClick: PropTypes.func,
};

export default NextArrow;
