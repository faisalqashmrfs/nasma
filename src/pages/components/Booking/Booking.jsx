import { useState } from 'react';
import PopUpBooking from './../popUpBooking/PopUpBooking'
import './Booking.css'
import CheckMAFFF from './../Check-form/Check-form';

const Booking = (props) => {
  const zhsection = "zh-section"

  const [isOpen , setisOpen] = useState(false)
  

  return (
    <>
    
    <section className={props.class || zhsection}>
      <div className='zh-booking-parent'>
        <div className='zh-inner-img'>
          <img src={props.img}/>
        </div>
        <div className='zh-info'>
          <div className='zh-title'>
            <h2>{props.title}</h2>
            <h5>{props.title2}</h5>
            <p className='zh-desc'>{props.desc}</p>
            <div className='zh-icons'>
              {props.iconimg1 && props.icondesc1 && <span span className='zh-iconimg1'><img src={props.iconimg1}/><p className='zh-p'>{props.icondesc1}</p></span>}
              {props.iconimg2 && props.icondesc2 && <span className='zh-iconimg2'><img src={props.iconimg2}/><p className='zh-p'>{props.icondesc2}</p></span>}
              {props.iconimg3 && props.icondesc3 && <span className='zh-iconimg3'><img src={props.iconimg3}/><p className='zh-p'>{props.icondesc3}</p></span>}
              {props.iconimg4 && props.icondesc4 && <span className='zh-iconimg4'><img src={props.iconimg4}/><p className='zh-p'>{props.icondesc4}</p></span>}
            </div>
            {props.btn && <div className='zh-btn-price'>
              <button onClick={() => setisOpen(true) }  >{props.btn}</button>
              <p>{props.price}<span>{props.pernight}</span></p>
            </div>}
          </div>
        </div>
      </div>
    </section>
    <PopUpBooking 
    open = {isOpen}
    >
    <CheckMAFFF
    onClose = {() => setisOpen(false)}
    />
    </PopUpBooking>
    </>
  )
}

export default Booking