import imghero from './../img/Group 512.png';
import scrollimg from './../img/scroll.png';
import Hero from './../components/Hero/Hero';
import Smcards from '../components/Smcards/Smcards';
import smcardimg1 from './../img/smcardimg.png';
import smcardimg1sm from './../img/img smscreen.png';
import ImageGray from '../components/imagegray/ImageGray';
import Booking from './../components/Booking/Booking';
import img from './../img/cards/room1.jpg';
import iconimg1 from './../img/cards/Vector.svg'
import iconimg2 from './../img/cards/Group (1).svg'
import iconimg3 from './../img/cards/Vector (3).svg'
import iconimg4 from './../img/cards/Group.svg'
import Button from 'react-bootstrap/Button';
import OurSection from '../components/our-section/Our-section';
import VideoMA from '../components/Video/Video';
import './Home.css'
const Home = () => {
  return (
    <>
    <Hero imghero={imghero}
      titlehero="Feel The Breeze"
      deschero="Scroll To Discover"
      scrollimg={scrollimg}
    />
    <Smcards smcardimg1={smcardimg1}
             smcardimg1sm={smcardimg1sm}
             title1="The 13 most incredible experiences"
             title1sm="Our history"
             desc1="when did we start and how did we start and how ..."
             desc1sm="A simple and peaceful life how did we start and how..."
             date="July 17, 2023"
             btn="Read Article"
             btnsm="learn more"

             smcardimg2={smcardimg1}
             smcardimg2sm={smcardimg1sm}
             title2="The 13 most incredible experiences"
             title2sm="Our history"
             desc2="when did we start and how did we start and how ..."
             desc2sm="A simple and peaceful life how did we start and how..."

             smcardimg3={smcardimg1}
             smcardimg3sm={smcardimg1sm}
             title3="The 13 most incredible experiences"
             title3sm="Our history"
             desc3="when did we start and how did we start and how ..."
             desc3sm="A simple and peaceful life how did we start and how..."
    />
    <ImageGray />
    <OurSection 
        imghero={imghero}
        />
    <Booking img={img}
        title="Duplex Room"
        title2="2 floors suitable for families"
        desc="Newly refurnished luxury accommodation with finest quality linen & quality decor. Air Conditioning Electric Blankets,
         Ironing Boards, Mini Bar, Flat Screen & Free In house Movies,
         WiFi and Housekeeping by request."
        iconimg1={iconimg1}
        iconimg2={iconimg2}
        iconimg3={iconimg3}
        iconimg4={iconimg4}
        btn={<Button variant="primary">BOOK NOW</Button>}
        price="$500"
        pernight="Per Night"
        icondesc1="4 persons"
        icondesc2="Room Services"
        icondesc3="Kingsize Bed"
        icondesc4="TV"
         />
        <VideoMA/>
        <div className="fq-our-info">
                <div>
                <h2>Our Residential</h2>
                <p>Experience the ultimate in comfortable living in our residential properties.</p>
                </div>
                <div><button>View More</button></div>
            </div>
        <Booking img={img}
        class = "zh-section2"
        title="Duplex Room"
        title2="2 floors suitable for families"
        desc="We warmly welcome you to our restaurant, where we strive to create an unparalleled dining experience that delights the senses and nourishes the soul.
        Our team of culinary experts is dedicated to sourcing only the freshest and highest quality ingredients, preparing each dish with care and attention to detail. Thank you for choosing our restaurant for your dining pleasure. 
        We are honored to have you as our guest and look forward to serving you again soon."
        
        />
        <Booking img={img}
        class = "zh-section2"
        title="Duplex Room"
        title2="2 floors suitable for families"
        desc="We warmly welcome you to our restaurant, where we strive to create an unparalleled dining experience that delights the senses and nourishes the soul.
        Our team of culinary experts is dedicated to sourcing only the freshest and highest quality ingredients, preparing each dish with care and attention to detail. Thank you for choosing our restaurant for your dining pleasure. 
        We are honored to have you as our guest and look forward to serving you again soon."
         />
    </>
  )
}

export default Home;