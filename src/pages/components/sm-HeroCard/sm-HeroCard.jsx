import './sm-HeroCard.css';
import DuplexRoom from './../../img/sm-HeroCards/Duplex-room.png';
import ClassicRoom from './../../img/sm-HeroCards/Classuc-room.png';
import ClassicRoom2 from './../../img/sm-HeroCards/classic-room2.png';
import { useState } from 'react';
import PopUpBooking from './../popUpBooking/PopUpBooking'
// import './Booking.css'
import CheckMAFFF from './../Check-form/Check-form';

function HeroCard(props) {

    const [isOpen , setisOpen] = useState(false) 

  return (
    <>
    <div className='Hero-card-fq'>
        <div className='card-fqfq'>
            <div className='image'>
                <img src={DuplexRoom} alt="" />
            </div>
            <h2>Duplex Room</h2>
            <p className='FQ-cardPara'>2 floors suitable for families</p>
            <div className='fq-last-div'>
                <button onClick={() => setisOpen(true) }  >Book Now</button>
                <div className='FQ-rightlass'>
                    <span>$500</span>
                    <p>pre Night</p>
                </div>
            </div>
        </div>
        <div className='card-fqfq'>
            <div className='image'>
                <img src={ClassicRoom} alt="" />
            </div>
            <h2>Classic Room</h2>
            <p className='FQ-cardPara'>suitable for Groups</p>
            <div className='fq-last-div'>
                <button onClick={() => setisOpen(true) }  >Book Now</button>
                <div className='FQ-rightlass'>
                    <span>$500</span>
                    <p>pre Night</p>
                </div>
            </div>
        </div>
        <div className='card-fqfq'>
            <div className='image'>
                <img src={ClassicRoom2} alt="" />
            </div>
            <h2>Classic Room</h2>
            <p className='FQ-cardPara'>suitable for Groups</p>
            <div className='fq-last-div'>
                <button onClick={() => setisOpen(true) }  >Book Now</button>
                <div className='FQ-rightlass'>
                    <span>$500</span>
                    <p>pre Night</p>
                </div>
            </div>
        </div>
        
    </div>
    <PopUpBooking 
    open = {isOpen}
    >
    <CheckMAFFF
    onClose = {() => setisOpen(false)}
    />
    </PopUpBooking></>
  )
}


export default HeroCard
