import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Investigator = () => {
  const investigator = {
    name: 'placeholder name',
    description: 'placeholder description',
    photo: '',
    id: 1,
  };
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/coaches/${investigator.id}/reserve`);
  };

  const imgstyle = {
    backgroundImage: `url(${investigator.photo})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div
      className=""
      style={{ height: '100vh' }}
    >
      <div className="">
        <div className="" style={imgstyle} />
        <div className="">
          <div className="text-center">
            <h4>{investigator.name}</h4>
            <p>{investigator.description}</p>
          </div>

          <div className="">
            <p className="">Investigator&apos;s Fee:</p>
            <p>$500</p>
          </div>

          <div className="">
            <p className="">Duration:</p>
            <p>1 hour</p>
          </div>
          <div className="">
            <p className="">Investigator Availability:</p>
            <p>Available</p>
          </div>
          <div className="">
            <p className="">Origin:</p>
            <p>Economics</p>
          </div>

          <Link className="" to="/investigators">
            <p className="">MORE INVESTIGATORS</p>
          </Link>
          <button
            className=""
            onClick={handleClick}
            type="button"
          >
            Reserve Investigator
          </button>
        </div>
      </div>
      <div className="">
        <button onClick={() => navigate(-1)} className="" type="button">
          {' '}
          {' '}
        </button>
      </div>
    </div>
  );
};

export default Investigator;
