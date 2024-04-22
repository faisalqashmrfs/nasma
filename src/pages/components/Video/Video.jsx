import React from 'react'
import './Video.css'

function VideoMA({ChosingLan}) {
  return (
    <div className='video-section'>
      <div className='top'>


        <div className='col'>
          <h2 > 300+</h2>
          <p className='text'>{ChosingLan === 'en' ? 'Employee': 'موظف' }</p>
        </div>
        <div className='col'>
          <h2>10k+</h2>
          <p className='text'>{ChosingLan === 'en' ? 'Happy Clients': 'عميل راض' }</p>
        </div>
        <div className='col'>
          <h2>5000+</h2>
          <p className='text'>{ChosingLan === 'en' ? 'People Capacity': 'السعة الكلية ' }</p>
        </div>
        <div className='col'>
          <h2>3000+</h2>
          <p className='text'>{ChosingLan === 'en' ? 'Any statics': 'احصائيات' }</p>
        </div>

      </div>

      <div className='video'>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/fZMymaW2tkY?si=EM4MHqtL3F40c3D-&amp;controls=0?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
    </div>
  )
}

export default VideoMA









