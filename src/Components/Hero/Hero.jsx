import React from 'react';
import './Hero.css';
import handIcon from '../Assets/hand_icon.png';
import arrowIcon from '../Assets/arrow.png';
import heroImg from '../Assets/hero_img.png';

const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-left">
        <h2>NEW ARRIVALS ONLY</h2>
        <div className="hero-hand-icon">
          <p>New</p>
          <img src={handIcon} alt="" />
        </div>
        <p>Collection</p>
        <p>for everyone</p>
        <div className="hero-latest-btn">
          <div>Latest Collection</div>
          <img src={arrowIcon} alt="" />
        </div>
      </div>
      <div className="hero-right"></div>
      <img src={heroImg} alt="" />
    </div>
  );
}

export default Hero;
