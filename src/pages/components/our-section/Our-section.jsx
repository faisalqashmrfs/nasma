import './Our-section.css';

export default function OurSection(props){
    return(
        <div className="our-section">
            <img src={props.imghero}/>
            <div className="llayer-fq"></div>
            <div className="zh-info">
                <div>
                <h2>Our Residential</h2>
                <p>Experience the ultimate in comfortable living in our residential properties.</p>
                </div>
                <div><button>View More</button></div>
            </div>
        </div>
    )
}