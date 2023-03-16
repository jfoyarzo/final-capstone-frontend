// import { nanoid } from '@reduxjs/toolkit';
// import { useSelector } from 'react-redux';
import React from 'react';
import { BiLeftArrow, BiRightArrow } from 'react-icons/bi';
// import InvestigatorCard from './InvestigatorCard';
import InvestigatorsSlider from './InvestigatorsSlider';
import './Investigators.css';
import SideBar from './SideBar';
import './SideBar.css';

const Investigators = () => (
  // const investigators = useSelector((state) => state.investigators);
  <div>
    <SideBar />
    <div>
      <h1>Latest Investigators</h1>
      <p>Please select an investigator</p>
      <div className="slide-container">
        <div className="arrow-container">
          <BiLeftArrow className="arrow" />
        </div>
        <InvestigatorsSlider />
        <div className="arrow-container">
          <BiRightArrow className="arrow" />
        </div>
      </div>
    </div>
  </div>
);

export default Investigators;
