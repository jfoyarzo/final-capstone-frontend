import React from 'react';
import InvestigatorsSlider from './InvestigatorsSlider';
import './Investigators.css';

const Investigators = () => (
  <div id="investigators-main-container">
    <div id="investigators-container" style={{ width: '100%' }}>
      <h1>Latest Investigators</h1>
      <p>Please select an investigator</p>
      <InvestigatorsSlider />
    </div>
  </div>
);

export default Investigators;
