import './Our-section.css';

export default function OurSection(props) {

    const class1 = "our-section"
    return (
        <div className={props.class2 || class1}>
            <img src={props.imghero} />
            <div className="llayer-fq"></div>
            <div className={props.ChosingLan === "en" ? "zh-info" : "zh-infoAr"}>
                <div>
                    <h2>{props.title}</h2>
                    <p>{props.desc}</p>
                </div>
                {props.btn && <div><button className='button2'>{props.ChosingLan === 'en' ? "View More" : "رؤية المزيد" }</button></div>}
                {props.btn1 && <div><button className='button1'>{props.ChosingLan === 'en' ? "Get Direction" : "احصل على الاتجاه" }</button></div>}
            </div>
        </div>
    )
}