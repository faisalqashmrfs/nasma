import React from 'react'
import './Contact-form.css'

function ContactMA() {
  return (
    <div id='contact'>

      <div className='form'>
       <div>
       <p className='top-text'>Do you have any questions?</p>
        <p className='bottom-text'>Please fill in the below form and one of our agent will respond swiftly</p>
       </div>
          <div className='col'>
            <div className='row'>
              <div className='groub'>

                <div className='input-groub'>
                  <input className='input' type='text' />
                  <label className='placeholder'>Full name <span>*</span></label>
                </div>
                <div className='input-groub'>
                  <input className='input' type='text' />
                  <label className='placeholder'>Email <span>*</span></label>
                </div>
              
              </div>
              <div className='groub'>
              <div className='input-groub'>
                  <input className='input' type='number' />
                  <label className='placeholder'>Phone number  <span>*</span></label>
                </div>
                <div className='input-groub'>
                  <input className='input' type='text' />
                  <label className='placeholder'>Subject <span>*</span></label>
                </div>
                
              </div>
            </div>
          </div>

          <div className='col'>
            <div className='row'>
              <div className='groub2'>
              <div className='input-groub'>
                  <textarea className='input' type='text' />
                  <label className='placeholder'>Your message  <span>*</span></label>
                </div>

              <div className='bottom'>
                <input type="checkbox" className='check' />
                <p className='bo-text'>I agree to submit my information via this form</p></div>
              </div>
            </div>
          </div>
      </div>
      <div className='send-buttomney'>
      <button className='1'>Send </button>
      </div>
    </div>
  )
}

export default ContactMA