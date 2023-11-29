import React from 'react'
import './Check-form.css'
import SelectMA from '../Select/Select'

function CheckMAFFF({onClose}) {
  return (
    <div id='check'>

      <div className='form'>
        <p className='top-text'>Check availability Form:</p>
          <div className='col'>
            <p className='text'> Contact information:</p>
            <div className='row'>
              <div className='groub'>
                <div className='input-groub'>
                  <input className='input' />
                  <label className='placeholder'>Full name <span>*</span></label>
                </div>
                <div className='input-groub'>
                  <input className='input' />
                  <label className='placeholder'>Email address</label>
                </div>
              </div>
              <div className='groub'>
                <div className='input-groub'>
                  <input className='input' />
                  <label className='placeholder'>Phone number <span>*</span></label>
                  <p className='text-bottom'>WhatsApp available</p>
                </div>
              </div>
            </div>
          </div>

          <div className='col'>
            <p className='text'>Holiday information:</p>
            <div className='row'>
              <div className='groub2'>
                <SelectMA />
              </div>
              <div className='groub2'>
                <div className='input-groub'>
                  <input className='input' />
                  <label className='placeholder'>Check-out date <span>*</span></label>
                </div>

                <div className='input-groub'>
                    <input className='input' />
                    <label className='placeholder'>Guests number <span>*</span></label>
                </div>
              </div>
            </div>
          </div>

        
          <div className='input-groub'>
              <input className='input inp' />
              <label className='placeholder'>Description</label>
          </div>
      </div>
      <button onClick={onClose}>Book Now</button>
    </div>
  )
}

export default CheckMAFFF