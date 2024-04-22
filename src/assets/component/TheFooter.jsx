import './../Style/TheFooter.css'
import mountainbreeze1 from './../img/Group 1.svg';
import focal from './../img/Layer 1.svg';
import arr from './../img/Arrow 3.svg';
import phone from './../img/Subtract.svg';
import { Link } from 'react-router-dom';
import fecebookIcon from './../img/uil_facebook.svg';
import instagramIcon from './../img/instagram.svg';
import { FaTelegramPlane } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";

function TheFooter({ ChosingLan }) {

    return (
        <div className="footer">
            <div className='container'>
                <div className='father-of-img-footer'>
                    <img src={mountainbreeze1} alt="" className='image1' />
                </div>
                <div className='section1'>
                    <div className={ChosingLan === 'en' ? "section2" : "section2AR"}>
                        <div className='links'>
                            <h3>{ChosingLan === 'en' ? "INFORMATION" : "المعلومات"}</h3>

                            <a href="#">{ChosingLan === 'en' ? "ABOUT US" : "معلومات عنا"}</a>
                            <a href="#">{ChosingLan === 'en' ? "BLOG" : "المدونة"}</a>
                            <a href="#">{ChosingLan === 'en' ? "CONTACT US" : "اتصل بنا"}</a>
                        </div>
                        <div className='links'>
                            <h3>{ChosingLan === 'en' ? "LINKS TO HELP" : "روابط المساعدة"}</h3>
                            <a href="#">{ChosingLan === 'en' ? "FACILITES" : "المرافق"}</a>
                            <a href="#">{ChosingLan === 'en' ? "RESIDENTIAL" : "السكن"}</a>
                            <a href="#">{ChosingLan === 'en' ? "GALLERY" : "المعرض"}</a>
                        </div>
                        <div className={ChosingLan === 'en' ? "links" : "linksAR"}>
                            <h3>{ChosingLan === 'en' ? "CONTACT" : "اتصل بنا"}</h3>
                            <div className='phonenumber'>
                                <img src={phone} alt="" />
                                <p> 944 000 111</p>
                            </div>
                            <a href="#">mountainbreeze@gmail.com</a>
                            <button>{ChosingLan === 'en' ? "let's talk" : "تحدث معنا "}<img src={arr} alt="" /> </button>
                        </div>
                        <div className='links'>
                            <h3>{ChosingLan === 'en' ? "KEEP IN TOUCH" : "ابقى على تواصل معنا"}</h3>
                            <ul className="socailmedia">
                                <li>
                                    <Link target="_blank" to={'https://www.facebook.com/MountainBreezeResort1'}>
                                        <img src={fecebookIcon} alt="fecebookIcon" />
                                    </Link>
                                </li>
                                <li>
                                    <Link to={'https://www.instagram.com/mountain.breeze.resort?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='}>
                                        <img src={instagramIcon} alt="instagramIcon" />
                                    </Link>
                                </li>
                                {/* <li><img src={linkedinIcon} alt="linkedinIcon" /></li> */}
                                <li className="IconStranger FQmagString">
                                    <Link target="_blank" to={'https://whatsapp.com/channel/0029VaONWu14CrfeIRVEJM2k'}>
                                        <FaWhatsapp color="#004E6B" size={15} />
                                    </Link>
                                </li>
                                <li className="IconStranger">
                                    <Link target="_blank" to={'https://t.me/mountainbreezeresort'}>
                                        <FaTelegramPlane color="#004E6B" />
                                    </Link>
                                </li>
                            </ul>
                        </div>

                    </div>
                    <div className='below'>
                        <div className='createdby'>
                            <div className={ChosingLan === 'en' ? "focalx" : "focalxAR"}>
                                <p>{ChosingLan === 'en' ? "created by : " : ": أنشئ بواسطة"}</p>


                                <Link to={'https://focal-x.com/'}>
                                    <img src={focal} alt="" />
                                </Link>
                            </div>
                            <p className='p-footer'>@2023 focalX. {ChosingLan === 'en' ? "All right  reserved." : "جميع الحقوق محفوظة"}.</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default TheFooter;