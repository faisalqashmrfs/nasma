import React from 'react'
import './Video.css'
import logo from './../../img/image.video/Group 303.png';

function VideoMA() {
  return (
    <div className='video-section'>
      <div className='top'>


        <div className='col'>
          <h2 > 300+</h2>
          <p className='text'>Employee</p>
        </div>
        <div className='col'>
          <h2>10k+</h2>
          <p className='text'>Happy Clients</p>
        </div>
        <div className='col'>
          <h2>5000+</h2>
          <p className='text'>People Capacity</p>
        </div>
        <div className='col'>
          <h2>3000+</h2>
          <p className='text'>Any statics</p>
        </div>

      </div>

      <div className='video'>
        <div className='middle-logo'>
        <img src={logo} alt='' className='logo' />
        </div>
      </div>
    </div>
  )
}

export default VideoMA









