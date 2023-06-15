import React from 'react';
import backgroundImage from '../caesarlobby.png';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container' style={{ backgroundImage: `url(${backgroundImage})` }}></div>
  )
}

export default HeroSection