import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import InvestigatorCard from './InvestigatorCard';

export default function InvestigatorsSlider() {
  const investigators = useSelector((state) => state.investigators);
  return (
    <Slider slidesToShow={3}>
      {investigators.value.map((investigator) => (
        <InvestigatorCard
          key={nanoid()}
          name={investigator.name}
          image={investigator.photo}
          description={investigator.description}
        />
      ))}
    </Slider>
  );
}
