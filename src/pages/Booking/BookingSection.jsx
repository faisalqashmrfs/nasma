import Hero from "../components/Hero/Hero"
import OurSection from "../components/our-section/Our-section"
import imghero from "./../img/Booking.png"
import img from './../img/cards/room1.jpg';
import Booking from './../components/Booking/Booking';
import shadowHero from './../img/box-shado-hero.png';
import book0 from './../img/book0.png';
import iconimg1 from './../img/cards/Vector.svg'
import iconimg2 from './../img/cards/Group (1).svg'
import iconimg3 from './../img/cards/Vector (3).svg'
import iconimg4 from './../img/cards/Group.svg'
import Button from 'react-bootstrap/Button';
import FilterBOKK from "../components/FilterBOKK/FilterBOKK";
import { useEffect, useState } from 'react';
import { CircleLoader } from 'react-spinners';
import TheFooter from "../../assets/component/TheFooter";

function BookingSection({togle}) {

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
      titlehero="BOOKING"
      deschero="Book for an Extraordinary Experiment!"
      shadowHero={shadowHero}
      togle={togle}
    />
    {lood ? <div className='Looder'><CircleLoader color="#36d7b7" position="apsoliote"/></div> :<section>
    <FilterBOKK/>
    <OurSection
      imghero={book0}
      class2="our-section2"
      title='Our Residential'
      desc='With the best luxury spa, Gym and Pool experiences.'
    />
    <Booking img={img}
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
    <Booking img={img}
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
    <Booking img={img}
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
         <div>
            <button>
              View More
            </button>
         </div>
         <TheFooter/>
    </section>}
    </>
  )
}
export default BookingSection;
