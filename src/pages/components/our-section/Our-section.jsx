import './Our-section.css';

export default function OurSection(props){

    const class1 = "our-section"
    return(
        <div className={props.class2 || class1}>
            <img src={props.imghero}/>
            <div className="llayer-fq"></div>
            <div className="zh-info">
                <div>
                <h2>{props.title}</h2>
                <p>{props.desc}</p>
                </div>
                <div>{ props.btn && <button>View More</button>}</div>
                <div>{ props.btn1 && <button className='button1'>Get Direction</button>}</div>
            </div>
        </div>
    )
}