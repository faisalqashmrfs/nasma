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
import shadowHero from './../img/box-shado-hero.png';
import contantex1 from './../img/Our-sectionImg/ex2.png';
import { useEffect, useState } from 'react';
import { CircleLoader } from 'react-spinners';
import TheFooter from "../../assets/component/TheFooter";


function Contact({ togle }) {

  const [lood, setlood] = useState(false)
  useEffect(() => {
    setlood(true)
    setTimeout(() => {
      setlood(false)
    }, 3000)
  }, [])

  return (
    <>
      <Hero imghero={imghero}
        titlehero="Contact Us"
        deschero="Would you like to keep in touch? we'd love to hear from you.
      Here's how you can reach us..."
        shadowHero={shadowHero}
        togle={togle}
      />
      {lood ? <div className='Looder'><CircleLoader color="#36d7b7" position="apsoliote"/></div> :
        <section>
          <ContactMA />

          <OurSection
            imghero={contantex1}
            btn1={true}
            title='Location'
            desc='Syria, Kurdaha, Alqlelaa village.'
          />
          <div className="map-nasma">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4076.3947752456324!2d36.14158825741965!3d35.43110557600169!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15240ee780a37133%3A0xe1477df1e40905ca!2sMountain%20Breeze%20resort!5e1!3m2!1sar!2s!4v1701259072876!5m2!1sar!2s"></iframe>
          </div>
          <OurSection
            imghero={contantex1}
            title='Keep in touch'
            desc='& stay informed of everything new'
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
          <TheFooter />

        </section>
      }
    </>
  )
}
export default Contact
