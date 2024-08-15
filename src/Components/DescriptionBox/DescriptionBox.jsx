import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122) </div>
      </div>
      <div className="descriptionbox-description">
        <p>Pixel Pro: Power Up Your Phone Photography
Pixel Pro isn't just a camera store, it's your one-stop shop to elevate your mobile photography game. Whether you're a seasoned Pixel Pro user or just starting out, we have everything you need to capture stunning photos and videos.</p>
      <p>Our friendly and knowledgeable staff are passionate about mobile photography. They can help you choose the right accessories for your needs and answer any questions you have about taking incredible pictures with your Pixel phone.</p>
      </div>
    </div>
  )
}

export default DescriptionBox
