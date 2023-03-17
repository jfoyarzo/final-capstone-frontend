import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BsFillArrowLeftSquareFill, BsCaretRight } from 'react-icons/bs';
import './investigator.css';

const Investigator = () => {
  const investigator = {
    name: 'placeholder name',
    description: 'placeholder description',
    photo: 'https://as2.ftcdn.net/v2/jpg/02/66/72/41/1000_F_266724172_Iy8gdKgMa7XmrhYYxLCxyhx6J7070Pr8.jpg',
    id: 1,
  };
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
      className="d-flex coach_page flex-column justify-content-center align-items-center"
      style={{ height: '100vh' }}
    >
      <div className="d-flex w-100 px-2">
        <div className="coach_image mx-3 col-5" style={imgstyle} />
        <div className="d-flex pb-3 px-2 flex-column align-items-end">
          <div className="text-center">
            <h4>{investigator.name}</h4>
            <p>{investigator.description}</p>
          </div>

          <div className="d-flex justify-content-around bg-body-secondary w-100 align-items-end">
            <p className="mt-3 p-0">Investigator&apos;s Fee:</p>
            <p>$500</p>
          </div>

          <div className="d-flex justify-content-around w-100 align-items-end">
            <p className="mt-3 p-0">Duration:</p>
            <p>1 hour</p>
          </div>
          <div className="d-flex justify-content-around bg-body-secondary w-100 align-items-end">
            <p className="mt-3 p-0">Investigator Availability:</p>
            <p>Available</p>
          </div>
          <div className="d-flex justify-content-around  w-100 align-items-end">
            <p className="mt-3 p-0">Origin:</p>
            <p>Economics</p>
          </div>

          <Link className="text-dark text-decoration-none fs-5" to="/investigators">
            <p className="d-inline">MORE INVESTIGATORS</p>
            <BsCaretRight />
          </Link>
          <button
            className="btn btn-success mt-3"
            onClick={handleClick}
            type="button"
          >
            Hire Investigator
          </button>
        </div>
      </div>
      <div className="d-flex justify-content-between px-3 w-100 mt-5">
        <button onClick={() => navigate(-1)} className="btn px-3 btn-success" type="button">
          {' '}
          <BsFillArrowLeftSquareFill />
          {' '}
        </button>
      </div>
    </div>
  );
};

export default Investigator;
