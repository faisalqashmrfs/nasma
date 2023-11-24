import './../Style/TheFooter.css'
import facebook from './../img/uil_facebook.svg';
import instagram from './../img/instagram.svg';
import linkedin from './../img/uil_linkedin.svg';
import youtube from './../img/youtube.svg';
import mountainbreeze1 from './../img/Group 1.svg';
import focal from './../img/Layer 1.svg';
import arr from './../img/Arrow 3.svg';
import phone from './../img/Subtract.svg';


function TheFooter(){

    return(
        <div className="footer">
            <div className='container'>
            <div className='father-of-img-footer'>
                <img src={mountainbreeze1} alt="" className='image1' />
            </div>
          <div className='section1'> 
          <div className='section2'>
            <div className='links'>
                <h3>INFORMATION</h3>
                <a href="#">ABOUT US</a>
                <a href="#">BLOG</a>
                <a href="#">CONTACT US</a>
            </div>
            <div className='links'>
                <h3>LINKS TO HELP</h3>
                <a href="#">FACILITES</a>
                <a href="#">RESIDENTIAL</a>
                <a href="#">GALLERY</a>
            </div>
            <div className='links'>
                <h3>CONTACT</h3>
                <div className='phonenumber'>
                  <img src={phone} alt="" />
                  <p> 944 000 111</p>
                </div>
                <a href="#">mountainbreeze@gmail.com</a>
                <button>let's talk <img src={arr} alt="" /> </button>
            </div>
            <div className='links'>
                <h3>KEEP IN TOUCH</h3>
                <div className='socailmedia'>
                    <img src={facebook} alt="" />
                    <img src={instagram} alt="" />
                    <img src={linkedin} alt="" />
                    <img src={youtube} alt="" />
                </div>
            </div>
           
          </div>
          <div className='below'>
                <div className='createdby'>
                    <div className='focalx'><p>created by: </p>
                    <img src={focal} alt="" />
                     </div>
                    
                    <p>@2023 focalX. All right  reserved.</p>
                </div>
            </div>
          </div>
            </div>
          
        </div>
    )
}

export default TheFooter;