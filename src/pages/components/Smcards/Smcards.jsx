import React from 'react'
import './Smcards.css'

const Smcards = (props) => {
  const class1 = "zh-smcards-container"
  return (
    <div className={props.class || class1 }>
        <div className='zh-smcard'>
            <div className='zh-smcard-img'>
                <img className='zh-img-bigscreen' src={props.smcardimg1}/>
                <img className='zh-img-smscreen' src={props.smcardimg1sm}/>
            </div>

            <div className='zh-smcard-info'>
                <h5 className='zh-h5-bigscreen'>{props.title1}</h5>
                <h5 className='zh-h5-smscreen'>{props.title1sm}</h5>
                <h6 className='zh-h6-bigscreen'>{props.desc1}</h6>
                <h6 className='zh-h6-smscreen'>{props.desc1sm}</h6>
                <p>{props.date}</p>
                <button className='zh-btn-bigscreen'>{props.btn}</button>
                <button className='zh-btn-smscreen'>{props.btnsm}</button>
            </div>
        </div>

        <div className='zh-smcard'>
        <div className='zh-smcard-img'>
        <img className='zh-img-bigscreen' src={props.smcardimg2}/>
        <img className='zh-img-smscreen' src={props.smcardimg2sm}/>
        </div>
        <div className='zh-smcard-info '>
                <h5 className='zh-h5-bigscreen'>{props.title2}</h5>
                <h5 className='zh-h5-smscreen'>{props.title2sm}</h5>
                <h6 className='zh-h6-bigscreen'>{props.desc2}</h6>
                <h6 className='zh-h6-smscreen'>{props.desc2sm}</h6>
                <p>{props.date}</p>
                <button className='zh-btn-bigscreen'>{props.btn}</button>
                <button className='zh-btn-smscreen'>{props.btnsm}</button>
        </div>
        </div>

        <div className='zh-smcard'>
        <div className='zh-smcard-img'>
        <img className='zh-img-bigscreen' src={props.smcardimg3}/>
        <img className='zh-img-smscreen' src={props.smcardimg3sm}/>
        </div>

        <div className='zh-smcard-info'>
                <h5 className='zh-h5-bigscreen'>{props.title3}</h5>
                <h5 className='zh-h5-smscreen'>{props.title3sm}</h5>
                <h6 className='zh-h6-bigscreen'>{props.desc3}</h6>
                <h6 className='zh-h6-smscreen'>{props.desc3sm}</h6>
                <p>{props.date}</p>
                <button className='zh-btn-bigscreen'>{props.btn}</button>
                <button className='zh-btn-smscreen'>{props.btnsm}</button>
        </div>
        </div>
    </div>
  )
}

export default Smcards