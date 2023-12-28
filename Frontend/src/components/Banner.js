import React from 'react'
import './Banner.css'
import 'animate.css';
import kco from '../image/headline.svg'
const Banner = () => {
  return (
    
      <div className='banner-div'>
         <div className='banner-heading'>
          <h1>We work the numbers,<br/> so you can do<br/> Wonders! </h1 >
          <p>Unleash your companies potential with agility and expertise. Outsource. Outshine. <span> FinTeam </span> replaces your finance function with lean, data-driven excellence delivering world class financial management services.
          </p>
          <button>Contact Us</button>
</div>
<div className='img-div'><img src={kco} alt='scg'></img></div>
</div>

      
    
  )
}

export default Banner
