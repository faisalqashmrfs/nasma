import { Link } from 'react-router-dom'
import './ContactInfo.css'

const ContactInfo = (props) => {
  return (
    <div className='zh-contact-info-section'>
        <div className='zh-contact-parent'>
        <div className='zh-mountain-breeze-icon'>
        <img  src={props.img}/>
        <p>{props.icontitle}</p>
        </div>
        
        <div className='zh-contact-4-info'>
        <div className='zh-location-direction'>
            <div className='zh-location'>
                <img className='mb-2' src={props.locationicon}/>
                <h5>{props.h51}</h5>
                <h6>{props.h61}</h6>
                <p>{props.paragraph1}</p>
            </div>
            <div className='zh-direction'>
                <img src={props.mapicon}/>
                <h5>{props.h52}</h5>
                <h6>{props.h62}<span>{props.note1}</span></h6>
                <p>{props.paragraph2}<span>{props.note2}</span></p>
            </div>
        </div>

        <div className='zh-phone-parking'>
        <div className='zh-phone'>
                <img className='mb-2' src={props.phoneicon}/>
                <h5>{props.h53}</h5>
                <h6>{props.h63}</h6>
                <p>{props.paragraph3}</p>
            </div>
            <div className='zh-car'>
                <img className='mb-2' src={props.caricon}/>
                <h5>{props.h54}</h5>
                <h6>{props.h64}</h6>
                <p>{props.paragraph4}</p>
            </div>
        </div>
        </div>
            <ul className="zh-contact-icons">
                <li>
                  <Link target="_blank" to={'https://www.facebook.com/MountainBreezeResort1'}>
                  <img src={props.facebookicon}/>
                  </Link>
                </li>
                <li>
                  <Link to={'https://www.instagram.com/mountain.breeze.resort?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='}>
                  <img src={props.instagramicon}/>
                  </Link>
                </li>
                {/* <li><img src={linkedinIcon} alt="linkedinIcon" /></li> */}
                <li>
                  <Link target="_blank" to={'https://whatsapp.com/channel/0029VaONWu14CrfeIRVEJM2k'}>
                  <img src={props.youtubeicon}/>
                    
                  </Link>
                </li>
                <li >
                  <Link target="_blank" to={'https://t.me/mountainbreezeresort'}>
                  <img src={props.linkedinicon}/>
                  </Link>
                </li>
              </ul>
        </div>

    </div>
  )
}

export default ContactInfo