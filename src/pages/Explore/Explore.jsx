import Hero from "../components/Hero/Hero"
import OurSection from "../components/our-section/Our-section"
import imghero from "./../img/Explore.jpg"
import Booking from './../components/Booking/Booking';
import img from './../img/cards/room1.jpg';
import ImageGray from '../components/imagegray/ImageGray';
import shadowHero from './../img/box-shado-hero.png';
import ourimg1 from './../img/Our-sectionImg/ex1.png';
import ourimg2 from './../img/Our-sectionImg/ex2.png';
import ourimg3 from './../img/Our-sectionImg/ex3.png';
import ourimg4 from './../img/Our-sectionImg/ex4.png';
import ourimg5 from './../img/Our-sectionImg/ex5.png';
import ourimg6 from './../img/Our-sectionImg/ex6.png';
import ourimg7 from './../img/Our-sectionImg/ex7.png';
import cardimg1 from './../img/explore/room2.png';
import cardimg2 from './../img/explore/room3.png';
import cardimg3 from './../img/explore/room4.png';
import cardimg4 from './../img/explore/room5.png';
import cardimg5 from './../img/explore/room6.png';
import cardimg6 from './../img/explore/room7.png';
import cardimg7 from './../img/explore/room8.png';
import cardimg8 from './../img/explore/room9.png';
import cardimg9 from './../img/explore/room10.png';
import cardimg10 from './../img/explore/room11.png';
import cardimg11 from './../img/explore/room12.png';
import cardimg12 from './../img/explore/room13.png';
import cardimg13 from './../img/explore/room14.png';
import iconimg1 from './../img/cards/Vector.svg'
import iconimg2 from './../img/cards/Group (1).svg'
import iconimg3 from './../img/cards/Vector (3).svg'
import iconimg4 from './../img/cards/Group.svg'
import Button from 'react-bootstrap/Button';
import FilterEX from "../components/FilterEX/FilterEX";
import { CircleLoader } from 'react-spinners';
import { useEffect, useState } from 'react';
import TheFooter from "../../assets/component/TheFooter";


function Explore({togle}) {

    const [lood , setlood] = useState(false)
  useEffect(() => {
    setlood(true)
    setTimeout(() => {
      setlood(false)
    },3000)
  },[])

  return (
    <>
    <Hero imghero={imghero}
      titlehero="Explore The Resort"
      deschero="Explore all sections of the resort"
      togle={togle}
      shadowHero={shadowHero}
      
    />
    {lood ? <div className='Looder'><CircleLoader color="#36d7b7" position="apsoliote"/></div> :<section >
    <FilterEX />
    <div className="fq-our-info2">
        <div>
        <h2><span>RESORT</span> FACILITIES</h2>
        <p className='p1' >Experience the ultimate in comfortable living in our residential properties.</p>
        </div>
        <div><button>View More</button></div>
    </div>
    <OurSection
        imghero={ourimg1}
        title='Our Residential'
        desc='We.re thrilled to serve you and we hope you have a wonderful dining experience'
    />
    <Booking img={cardimg1}
          title="Duplex Room"
          title2="2 floors suitable for families"
          desc="We warmly welcome you to our restaurant where we strive to create an unparalleled dining experience that delights the senses and nourishes the soul.
          Our team of culinary experts is dedicated to sourcing only the freshest and highest quality ingredients, preparing each dish with care and attention to detail.Thank you for choosing our restaurant for your dining pleasure. 
          We are honored to have you as our guest and look forward to serving you again soon."
         />
         <Booking 
          img={cardimg2}
          class ="zh-section2"
          title="Duplex Room"
          title2="2 floors suitable for families"
          desc="As you peruse our menu, you'll discover an array of exquisite dishes that showcase the finest flavors and textures. Our chefs are passionate about creating culinary masterpieces that are not only delicious but also visually stunning. To complement our menu, we offer an extensive wine list that features a selection of the finest local and international wines. Our knowledgeable staff are happy to assist you in selecting the perfect wine to enhance your meal and elevate your dining experience."
         />
        <ImageGray />
        <OurSection
        imghero={ourimg2}
        title='Our Chalets'
        desc='With the best luxury spa, Gym and Pool experiences. '
    />
    <Booking img={cardimg3}
        title="Duplex Room"
        title2="2 floors suitable for families"
        desc="Newly refurnished luxury accommodation with finest quality
        linen & quality decor. Air Conditioning Electric Blankets,
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
         <Booking 
        img={cardimg4}
        class ="zh-section2"
        title="Duplex Room"
        title2="2 floors suitable for families"
        desc="Newly refurnished luxury accommodation with finest quality
        linen & quality decor. Air Conditioning Electric Blankets,
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
        <OurSection
        imghero={ourimg3}
        title='Activetys'
        desc='Never stop your daily activity. '
    />
    <Booking img={cardimg5}
        title="Duplex Room"
        title2="2 floors suitable for families"
        desc="We are thrilled to welcome you to our gym, where you will find state-of-the-art equipment, expert trainers, and a variety of fitness classes to help you stay active and healthy. Whether you are a seasoned athlete or new to fitness, we are here to help you succeed.
        At our gym, we believe that fitness should be fun, challenging, and rewarding. We offer a welcoming and inclusive environment where everyone is encouraged to achieve their personal best. We can't wait to help you on your fitness journey!"
         />
         <Booking 
        img={cardimg6}
        class ="zh-section2"
        title="Duplex Room"
        title2="2 floors suitable for families"
        desc="Our cinema is equipped with state-of-the-art technology to provide you with the best possible cinematic experience. From crystal-clear images to immersive sound, we take pride in delivering a high-quality movie experience that will transport you to another world.
        We believe that cinema is more than just entertainment; it is a powerful medium that can challenge our perceptions, spark our imaginations, and bring us together."
         />
        <OurSection
        imghero={ourimg4}
        title='The Nature'
        desc='Nature is a source of wonder and inspiration.'
    />
    <Booking img={cardimg7}
        title="Duplex Room"
        title2="2 floors suitable for families"
        desc="We are thrilled to welcome you to our gym, where you will find state-of-the-art equipment, expert trainers, and a variety of fitness classes to help you stay active and healthy. Whether you are a seasoned athlete or new to fitness, we are here to help you succeed.
        At our gym, we believe that fitness should be fun, challenging, and rewarding. We offer a welcoming and inclusive environment where everyone is encouraged to achieve their personal best. We can't wait to help you on your fitness journey!"
         />
         <Booking 
        img={cardimg8}
        class ="zh-section2"
        title="Duplex Room"
        title2="2 floors suitable for families"
        desc="Our cinema is equipped with state-of-the-art technology to provide you with the best possible cinematic experience. From crystal-clear images to immersive sound, we take pride in delivering a high-quality movie experience that will transport you to another world.
        We believe that cinema is more than just entertainment; it is a powerful medium that can challenge our perceptions, spark our imaginations, and bring us together."
         />
        <OurSection
        imghero={ourimg5}
        title='Pool'
        desc='We hope you make a splash and have a great time with us.'
    />
    <Booking img={cardimg9}
        title="Duplex Room"
        title2="2 floors suitable for families"
        desc="In our outdoor pool, you can relax, soak up the sun, and enjoy the refreshing water. The pool area is also surrounded by lush greenery and stunning views of the surrounding landscape, adding to the serene and peaceful atmosphere. In addition to our outdoor pool, we also offer a range of other amenities to help you make the most of your stay at our resort.
        From our spa services to our fitness center and on-site dining options, we are committed to providing our guests with a memorable and enjoyable experience."
         />
         <Booking 
        img={cardimg10}
        class ="zh-section2"
        title="Duplex Room"
        title2="2 floors suitable for families"
        desc="Our indoor pool area is spacious and features comfortable lounge chairs and towels for your convenience. The pool itself is heated to a comfortable temperature, making it suitable for swimming .
        Indoor pools are a great way to stay fit and healthy, as swimming is a low-impact exercise that provides a full-body workout.
        In addition, indoor pools provide a safe and controlled environment for children to learn to swim and for adults to practice swimming skills. "
         />
        <OurSection
        imghero={ourimg6}
        title='Conferences'
        desc='Welcome to our conference, where industry leaders come together to share ideas and collaborate on solutions.'
    />
    <Booking img={cardimg11}
        title="Duplex Room"
        title2="2 floors suitable for families"
        desc="The Infectious Disease Association is an organization that is committed to preventing, diagnosing, and treating infectious diseases. It brings together healthcare professionals, researchers, and experts in the field of infectious diseases to promote understanding, develop effective strategies, conduct research, provide education and training and increase public awareness. the Infectious Disease Association plays a vital role in advancing the field of infectious diseases and improving public health outcomes."
         />
         <Booking 
        img={cardimg12}
        class ="zh-section2"
        title="Duplex Room"
        title2="2 floors suitable for families"
        desc="reast cancer is a tough opponent, but you are tougher. You have the strength, resilience, and determination to fight this disease and overcome it. Remember that you are not alone in this fight.
        You have a team of healthcare professionals, loved ones, and supporters who are standing with you every step of the way, and don't hesitate to ask your healthcare team any questions you may have. Together, we can fight breast cancer and come out stronger on the other side."
         />
        <OurSection
        imghero={ourimg7}
        title='Sport Events'
        desc='Never stop your daily activity.'
    />
    <Booking img={cardimg13}
        title="Duplex Room"
        title2="2 floors suitable for families"
        desc="Newly refurnished luxury accommodation with finest quality
        linen & quality decor. Air Conditioning Electric Blankets,
        Ironing Boards, Mini Bar, Flat Screen & Free In house Movies,
        WiFi and Housekeeping by request.
        Newly refurnished luxury accommodation with finest quality
        linen & quality decor. Air Conditioning Electric Blankets,
        Ironing Boards, Mini Bar, Flat Screen & Free In house Movies,
        WiFi and Housekeeping by request.
        Newly refurnished luxury accommodation with finest quality
        linen & quality decor. Air Conditioning Electric Blankets,
        Ironing Boards, Mini Bar, Flat Screen & Free In house Movies,
        WiFi and Housekeeping by request."
         />
         <TheFooter/>
    </section>}
    
    </>
  )
}
export default Explore;
