import './Hero.css'

const Hero = (props) => {
  return (
    <div className="zh-hero">
        <img src={props.imghero}/>
        <div className="zh-info">
            <h1>{props.titlehero}</h1>
            <p>{props.deschero}</p>
            {props.scrollimg && <img src={props.scrollimg}/>}
        </div>
    </div>
  )
}

export default Hero;