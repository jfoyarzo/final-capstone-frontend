import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { BsFillArrowLeftSquareFill, BsCaretRight } from 'react-icons/bs';
import { Rating } from 'react-simple-star-rating';

const Investigator = () => {
  const { id } = useParams();
  const investigator = useSelector(
    (state) => state.investigators.value.filter((i) => i.id === parseInt(id, 10))[0],
  );
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/investigators/${investigator.id}/reserve`);
  };

  // const imgstyle = {
  //   backgroundImage: `url(${investigator.photo})`,
  //   backgroundSize: 'cover',
  //   backgroundPosition: 'center',
  // };

  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center"
      style={{ height: '100vh' }}
    >
      <div className="d-flex w-100 px-2">
        <img className="mx-3 col-5" src={investigator.photo} alt="private detective profile" />
        <div className="d-flex pb-3 px-2 flex-column align-items-end">
          <div className="text-center">
            <h4>{investigator.name}</h4>
            <p>{investigator.description}</p>
          </div>

          <div className="d-flex justify-content-around bg-body-secondary w-100 align-items-end">
            <p className="mt-3 p-0">Investigator&apos;s Fee:</p>
            <p>{investigator.fee}</p>
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
            <p className="mt-3 p-0">Rating:</p>
            <Rating initialValue={investigator.rating} readonly="true" />
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
            Reserve Investigator
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
