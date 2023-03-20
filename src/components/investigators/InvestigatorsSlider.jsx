import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import InvestigatorCard from './InvestigatorCard';
import PrevArrow from './PrevArrow';
import NextArrow from './NextArrow';

export default function InvestigatorsSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const investigators = useSelector((state) => state.investigators);

  return (
    <div className="slider-container">
      <Slider
        prevArrow={<PrevArrow disabled={currentSlide === 0} />}
        nextArrow={<NextArrow disabled={currentSlide === 2} />}
        beforeChange={(current, next) => setCurrentSlide(next)}
        className="slider"
        slidesToShow={3}
      >
        {investigators.value.map((investigator) => (
          <InvestigatorCard
            key={nanoid()}
            name={investigator.name}
            image={investigator.photo}
            description={investigator.description}
          />
        ))}
      </Slider>
    </div>
  );
}
