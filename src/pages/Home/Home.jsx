import imghero from './../img/Group 512.png';
import HomeOurImg1 from './../img/Our-sectionImg/Home1.png';
import scrollimg from './../img/scroll.png';
import Hero from './../components/Hero/Hero';
import ImageGray from '../components/imagegray/ImageGray';
import Booking from './../components/Booking/Booking';
import img from './../img/cards/room1.jpg';
import img2 from './../img/cards/room2.png';
import img3 from './../img/cards/room3.png';
import iconimg1 from './../img/cards/Vector.svg'
import iconimg2 from './../img/cards/Group (1).svg'
import iconimg3 from './../img/cards/Vector (3).svg'
import iconimg4 from './../img/cards/Group.svg'
import Button from 'react-bootstrap/Button';
import OurSection from '../components/our-section/Our-section';
import VideoMA from '../components/Video/Video';
import './Home.css'
import HeroCard from '../components/sm-HeroCard/sm-HeroCard';
import { useEffect, useState } from 'react';
import { CircleLoader } from 'react-spinners';
import TheFooter from '../../assets/component/TheFooter';

function Home({ togle }) {
  
  const [lood , setlood] = useState(false)
  useEffect(() => {
    setlood(true)
    setTimeout(() => {
      setlood(false)
    },3000)
  },[])
  return (
    <>
    <main className='bluuuuur'>
        <Hero imghero={imghero}
          titlehero="Feel The Breeze"
          deschero="Scroll To Discover"
          togle={togle}
          scrollimg={scrollimg}
        />
        {lood ? <div className='Looder'><CircleLoader color="#36d7b7" position="apsoliote"/></div> :<section>
        <HeroCard />
        <div className="fq-our-info">
          <div>
            <h2><span>RESORT</span> FACILITIES</h2>
            <p className='p1' >With the best luxury spa, Gym and Pool experiences. </p>
          </div>
          <div><button>Explore More</button></div>
        </div>
        <ImageGray />
        <OurSection
          imghero={HomeOurImg1}
          btn={true}
          btn1={false}
          title='Our Residential'
          desc='Experience the ultimate in comfortable living in our residential properties.'
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
        <VideoMA />
        <div className="fq-our-info">
          <div>
            <h2>Our<span> Restaurants</span></h2>
            <p className='p2' >We're thrilled to serve you and we hope you have a wonderful dining experience. </p>
          </div>
          <div><button>Explore More</button></div>
        </div>
        <Booking img={img2}
          class="zh-section2"
          title="Main Restaurant"
          title2="at the 3rd floor"
          desc="We warmly welcome you to our restaurant, where we strive to create an unparalleled dining experience that delights the senses and nourishes the soul.
        Our team of culinary experts is dedicated to sourcing only the freshest and highest quality ingredients, preparing each dish with care and attention to detail.Thank you for choosing our restaurant for your dining pleasure. 
        We are honored to have you as our guest and look forward to serving you again soon."

        />
        <Booking img={img3}
          class="zh-section2"
          title="Qasab Restaurant"
          title2="in the fresh air"
          desc="As you peruse our menu, you'll discover an array of exquisite dishes that showcase the finest flavors and textures. . Our chefs are passionate about creating culinary masterpieces that are not only delicious but also visually stunning. To complement our menu, we offer an extensive wine list that features a selection of the finest local and international wines. Our knowledgeable staff are happy to assist you in selecting the perfect wine to enhance your meal and elevate your dining experience."
        />
              <TheFooter/>
        </section>}
      </main>
    </>
  )
}

export default Home;