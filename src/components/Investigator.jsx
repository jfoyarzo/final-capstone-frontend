import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Investigator = () => {
  const { id } = useParams();
  const investigator = useSelector(
    (state) => state.investigators.value.filter((i) => i.id === parseInt(id, 10))[0],
  );
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/investigators/${investigator.id}/reserve`);
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
          <img src={investigator.photo} alt="private detective profile" />
          <div className="text-center">
            <h4>{investigator.name}</h4>
            <p>{investigator.description}</p>
          </div>

          <div className="">
            <p className="">Investigator&apos;s Fee:</p>
            <p>{investigator.fee}</p>
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
