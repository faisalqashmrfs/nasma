import ContactInfo from "../components/ContactInfo/ContactInfo"
import Hero from "../components/Hero/Hero"
import ContactMA from "../components/contact-form/Contact-form"
import OurSection from "../components/our-section/Our-section"
import mountainbreezeicon from './../img/Frame.png';
import locationicon from './../img/location.svg';
import phoneicon from './../img/call.svg';
import mapicon from './../img/map.svg';
import caricon from './../img/car.svg';
import facebookicon from './../img/Facebook (1).svg';
import youtubeicon from './../img/';
import instagramicon from './../img/Subtract (1).svg';
import linkedinicon from './../img/LinkedIn (1).svg'
import shadowHero from './../img/box-shado-hero.png';
import contantex1 from './../img/Our-sectionImg/ex2.png';
import { useEffect, useState } from 'react';
import { CircleLoader } from 'react-spinners';
import TheFooter from "../../assets/component/TheFooter";


function Contact({ togle , ChosingLan}) {

  const [lood, setlood] = useState(false)
  useEffect(() => {
    setlood(true)
    setTimeout(() => {
      setlood(false)
    }, 3000)
  }, [])

  return (
    <main className={ChosingLan === 'en' ? "MainEnglesh" : "MainArabic" }>
      <Hero
      class={'zh-imgContact'}
      titlehero={ChosingLan === 'en' ? "Contact Us" : "اتصل بنا "}
      deschero={ChosingLan === 'en' ? "Would you like to keep in touch? we'd love to hear from you .Here's how you can reach us..." : "هل ترغب في البقاء على اتصال؟ نحب أن نسمع منك. إليك كيف يمكنك الوصول إلينا"}
        shadowHero={shadowHero}
        togle={togle}
      />
      {lood ? <div className='Looder'><CircleLoader color="#36d7b7" position="apsoliote"/></div> :
        <section>
          <ContactMA ChosingLan={ChosingLan}/>

          <OurSection
            imghero={contantex1}
            btn1={true}
            ChosingLan={ChosingLan}
            title={ChosingLan == "en" ? "Location" : "الموقع"}
            desc={ChosingLan == "en" ? "Syria, Kurdaha, Alqlelaa village." : "سوريا، القرداحة،قرية القليلة"}
          />
          <div className="map-nasma">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4076.3947752456324!2d36.14158825741965!3d35.43110557600169!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15240ee780a37133%3A0xe1477df1e40905ca!2sMountain%20Breeze%20resort!5e1!3m2!1sar!2s!4v1701259072876!5m2!1sar!2s"></iframe>
          </div>
          <OurSection
            imghero={contantex1}
            ChosingLan={ChosingLan}
            title={ChosingLan == "en" ? "Keep in touch" : "ابقى على تواصل "}
            desc={ChosingLan == "en" ? "stay informed of everything new" : "ابقى على معرفة بكل ماهو جديد"}
          />
          <ContactInfo img={mountainbreezeicon}
            icontitle={ChosingLan == "en" ? "Mountain Breeze Resort" : "منتجه نسمة جبل"}
            locationicon={locationicon}
            h51={ChosingLan == "en" ? "LOCATION" : "الموقع"}
            h61={ChosingLan == "en" ? "Mountain Breeze" : "نسمة جبل"}
            paragraph1={ChosingLan == "en" ? "Syria, Kurdaha, Alqlelaa village" : "سوريا، القرداحة،قرية القليلة"}


            mapicon={mapicon}
            h53={ChosingLan == "en" ? "PHONE" : "الهاتف"}
            h63={ChosingLan == "en" ? "Main Hotel Contact Numbers:" : "أرقام اتصال الفندق الرئيسي"}
            paragraph3="+963 944 000 111 / (041) 211 541"


            phoneicon={phoneicon}
            h52={ChosingLan == "en" ? "DIRECTIONS & TRANSPORTATION" : "الاتجاهات و النقل"}
            h62={ChosingLan == "en" ? "Map to our Hotel" : "خريطة الطريق إلى المنتجع"}
            note1="(Google)"
            paragraph2={ChosingLan == "en" ? "Driving Directions" : "اتجاهات القيادة"}
            note2="(PDF)"

            caricon={caricon}
            h54={ChosingLan == "en" ? "HOTEL PARKING" : "موقف سيارات"}
            h64={ChosingLan == "en" ? "Self Parking:" : ": مواقغ السيارات"}
            paragraph4={ChosingLan == "en" ? "Standard parking rates to apply" : "تطبيق معايير ركن السيارات "}

            facebookicon={facebookicon}
            youtubeicon={youtubeicon}
            instagramicon={instagramicon}
            linkedinicon={linkedinicon}
          />
          <TheFooter 
              ChosingLan={ChosingLan}
              />

        </section>
      }
    </main>
  )
}
export default Contact
