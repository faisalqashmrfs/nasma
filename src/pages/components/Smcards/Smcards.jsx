import React from 'react'
import './Smcards.css'
import { Link } from 'react-router-dom'

const Smcards = (props) => {
  return (
      <div className='zh-smcard'>
        <div className='zh-smcard-img'>
          <img className='zh-img-bigscreen' src={props.smcardimg1} />
          <img className='zh-img-smscreen' src={props.smcardimg1sm} />
        </div>

        <div className='zh-smcard-info'>
          <h5 className='zh-h5-bigscreen'>{props.title1}</h5>
          <h5 className='zh-h5-smscreen'>{props.title1sm}</h5>
          <h6 className='zh-h6-bigscreen'>{props.desc1}</h6>
          <h6 className='zh-h6-smscreen'>{props.desc1sm}</h6>
          <p>{props.date}</p>
          <button className='zh-btn-bigscreen'><Link to='/blog/Articl/#'>{props.btn}</Link></button>
          <button className='zh-btn-smscreen'><Link to='/blog/Articl'>{props.btnsm}</Link></button>
        </div>
      </div>
  )
}

export default Smcards