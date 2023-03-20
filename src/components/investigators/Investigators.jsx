import React from 'react';
import InvestigatorsSlider from './InvestigatorsSlider';
import './Investigators.css';
import SideBar from './SideBar';
import './SideBar.css';

const Investigators = () => (
  <div id="investigators-main-container">
    <SideBar />
    <div id="investigators-container">
      <h1>Latest Investigators</h1>
      <p>Please select an investigator</p>
      <InvestigatorsSlider />
    </div>
  </div>
);

export default Investigators;
