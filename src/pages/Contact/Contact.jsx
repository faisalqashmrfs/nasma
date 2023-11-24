import ContactInfo from "../components/ContactInfo/ContactInfo"
import Hero from "../components/Hero/Hero"
import ContactMA from "../components/contact-form/Contact-form"
import OurSection from "../components/our-section/Our-section"
import imghero from "./../img/contact.png"
import mountainbreezeicon from './../img/Frame.png';
import locationicon from './../img/location.svg';
import phoneicon from './../img/call.svg';
import mapicon from './../img/map.svg';
import caricon from './../img/car.svg';
import facebookicon from './../img/Facebook (1).svg';
import youtubeicon from './../img/Subtract.svg';
import instagramicon from './../img/Subtract (1).svg';
import linkedinicon from './../img/LinkedIn (1).svg'

function Contact() {
  return (
    <>
    <Hero imghero={imghero}
      titlehero="Contact Us"
      deschero="Would you like to keep in touch? we'd love to hear from you.
      Here's how you can reach us..."
    />
    <ContactMA/>

    <OurSection
        imghero={imghero}
    />
    <div className="map-nasma">

    </div>
    <OurSection
        imghero={imghero}
    />
    <ContactInfo img={mountainbreezeicon}
                 icontitle="Mountain Breeze Resort"
                 locationicon={locationicon}
                 h51="LOCATION"
                 h61="Mountain Breeze"
                 paragraph1="Syria, Kurdaha, Alqlelaa village"
                 
                 
                 mapicon={mapicon}
                 h53="PHONE"
                 h63="Main Hotel Contact Numbers:"
                 paragraph3="+963 944 000 111 / (041) 211 541"

                 
                 phoneicon={phoneicon}
                 h52="DIRECTIONS & TRANSPORTATION"
                 h62="Map to our Hotel"
                 note1="(Google)"
                 paragraph2="Driving Directions"
                note2="(PDF)"
                 caricon={caricon}
                 h54="HOTEL PARKING"
                 h64="Self Parking:"
                 paragraph4="Standard parking rates to apply"

                 facebookicon={facebookicon}
                 youtubeicon={youtubeicon}
                 instagramicon={instagramicon}
                 linkedinicon={linkedinicon}
    />
    </>
  )
}
export default Contact
