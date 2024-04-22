import './Hero.css';


function Hero(props) {

  return (
    <div className={props.togle ? "zh-hero bluuuuer" : "zh-hero"}>
      <div className='FQ-100height'>
        <div className={props.class}></div>
        {props.shadowHero && <img className='zh-img2' src={props.shadowHero} alt='#' />}
      </div>
      <div className="zh-info">
        <h1>{props.titlehero}</h1>
        <p>{props.deschero}</p>
        {props.scrollimg && <img className='scroling-hero' src={props.scrollimg} />}
      </div>
    </div>
  )
}

export default Hero;