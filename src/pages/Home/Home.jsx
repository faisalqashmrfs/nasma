import imghero from './../img/Group 512.png';
import scrollimg from './../img/scroll.png';
import Hero from './../components/Hero/Hero';
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
import HeroCard from '../components/sm-HeroCard/sm-HeroCard';
import PopUpBooking from '../components/popUpBooking/PopUpBooking';
const Home = () => {
  return (
    <>
    <Hero imghero={imghero}
      titlehero="Feel The Breeze"
      deschero="Scroll To Discover"
      scrollimg={scrollimg}
    />
    <HeroCard/>
    <div className="fq-our-info">
                <div>
                <h2>Our Residential</h2>
                <p>Experience the ultimate in comfortable living in our residential properties.</p>
                </div>
                <div><button>View More</button></div>
            </div>
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
        Our team of culinary experts is dedicated to sourcing only the freshest and highest quality ingredients, preparing each dish with care and attention to detail.Thank you for choosing our restaurant for your dining pleasure. 
        We are honored to have you as our guest and look forward to serving you again soon."
        
        />
        <Booking img={img}
        class = "zh-section2"
        title="Duplex Room"
        title2="2 floors suitable for families"
        desc="We warmly welcome you to our restaurant, where we strive to create an unparalleled dining experience that delights the senses and nourishes the soul.
        Our team of culinary experts is dedicated to sourcing only the freshest and highest quality ingredients, preparing each dish with care and attention to detail.Thank you for choosing our restaurant for your dining pleasure. 
        We are honored to have you as our guest and look forward to serving you again soon."
         />
    </>
  )
}

export default Home;