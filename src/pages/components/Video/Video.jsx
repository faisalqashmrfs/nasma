import React from 'react'
import './Video.css'

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
        <iframe width="560" height="315" src="https://www.youtube.com/embed/fZMymaW2tkY?si=EM4MHqtL3F40c3D-&amp;controls=0?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
    </div>
  )
}

export default VideoMA









