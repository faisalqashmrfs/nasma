import Hero from "../components/Hero/Hero"
import OurSection from "../components/our-section/Our-section"
import imghero from "./../img/Booking.png"
import img from './../img/cards/room1.jpg';
import Booking from './../components/Booking/Booking';

function BookingSection() {
  return (
    <>
    <Hero imghero={imghero}
      titlehero="BOOKING"
      deschero="Book for an Extraordinary Experiment!"
    />
    <OurSection
        imghero={imghero}
    />
    <Booking img={img}
        title="Duplex Room"
        title2="2 floors suitable for families"
        desc="We warmly welcome you to our restaurant, where we strive to create an unparalleled dining experience that delights the senses and nourishes the soul.
        Our team of culinary experts is dedicated to sourcing only the freshest and highest quality ingredients, preparing each dish with care and attention to detail. Thank you for choosing our restaurant for your dining pleasure. 
        We are honored to have you as our guest and look forward to serving you again soon."
         />
    <Booking img={img}
    class ="zh-section2"
        title="Duplex Room"
        title2="2 floors suitable for families"
        desc="We warmly welcome you to our restaurant, where we strive to create an unparalleled dining experience that delights the senses and nourishes the soul.
        Our team of culinary experts is dedicated to sourcing only the freshest and highest quality ingredients, preparing each dish with care and attention to detail. Thank you for choosing our restaurant for your dining pleasure. 
        We are honored to have you as our guest and look forward to serving you again soon."
         />
    <Booking img={img}
    class ="zh-section2"
        title="Duplex Room"
        title2="2 floors suitable for families"
        desc="We warmly welcome you to our restaurant, where we strive to create an unparalleled dining experience that delights the senses and nourishes the soul.
        Our team of culinary experts is dedicated to sourcing only the freshest and highest quality ingredients, preparing each dish with care and attention to detail. Thank you for choosing our restaurant for your dining pleasure. 
        We are honored to have you as our guest and look forward to serving you again soon."
         />
         <div>
            <button>
              View More
            </button>
         </div>
    </>
  )
}
export default BookingSection;
