import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import InvestigatorsSlider from './InvestigatorsSlider';
import { fetchInvestigators } from '../../redux/investigators/investigatorSlice';
import './Investigators.css';

const Investigators = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchInvestigators());
  }, [dispatch]);
  return (
    <div id="investigators-main-container">
      <div id="investigators-container">
        <h1>Latest Investigators</h1>
        <p>Please select an investigator</p>
        <InvestigatorsSlider />
      </div>
    </div>
  );
};

export default Investigators;
