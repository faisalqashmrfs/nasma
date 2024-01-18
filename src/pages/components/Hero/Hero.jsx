import './Hero.css';


function Hero(props) {
  console.log(props.togle)
  return (
    <div className={props.togle ? "zh-hero bluuuuer" : "zh-hero"}>
      <div className='FQ-100height'>
        <img className='zh-img' src={props.imghero} alt='#' />
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