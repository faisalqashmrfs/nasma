import './Hero.css';


const Hero = (props) => {
  return (
    <div className="zh-hero">
        <div className='FQ-100height'>
          <img className='zh-img' src={props.imghero} alt='#'/>
          { props.shadowHero && <img className='zh-img2'src={props.shadowHero} alt='#'/>}
        </div>
        <div className="zh-info">
            <h1>{props.titlehero}</h1>
            <p>{props.deschero}</p>
            {props.scrollimg && <img className='scroling-hero' src={props.scrollimg}/>}
        </div>
    </div>
  )
}

export default Hero;