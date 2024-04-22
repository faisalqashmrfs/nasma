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

function Home({ togle , ChosingLan }) {
  
  const [lood , setlood] = useState(false)

  // useEffect(() => {
  //   setlood(true)
  //   setTimeout(() => {
  //     setlood(false)
  //   },3000)
  // },[])

  return (
    <>
    <main className={ChosingLan === 'en' ? "MainEnglesh" : "MainArabic" }>
        <Hero 
          class={'zh-imgHome'}
          titlehero={ChosingLan === 'en' ? "Feel The Breeze" : "استمتع بالنسمة اللطيفة"}
          deschero={ChosingLan === 'en' ? "Scroll To Discover" : "اكتشف المزيد معنا"}
          togle={togle}
          scrollimg={scrollimg}
        />
        {lood ? <div className='Looder'><CircleLoader color="#36d7b7" position="apsoliote"/></div> :<section>
        <HeroCard />
        <div  className={ChosingLan === 'en' ? "fq-our-info" : "fq-our-info fq-our-infoAr" }>
          <div>
            <h2>{ChosingLan === 'en' ? <><span>RESORT</span> FACILITIES</>: <span>مرافق المنتجع</span> }</h2>
            <p className='p1' ></p>
            <p className='p1' >{ChosingLan === 'en' ? "With the best luxury spa, Gym and Pool experiences. ": 'مع أفضل الخدمات الصحية الفاخرة وتجارب النادي الرياضي والسباحة   '}</p>
          </div>
          <div><button
           className={ChosingLan === 'en' ? "MainEnglesh" : "MainArabic" }
          >{ChosingLan === 'en' ? 'Explore More': 'استكشف أكثر'}</button></div>
        </div>
        <ImageGray 
        ChosingLan={ChosingLan}
        />
        <OurSection
          imghero={HomeOurImg1}
          ChosingLan={ChosingLan}
          btn={true}
          btn1={false}
          title={ChosingLan === 'en' ? "Our Residential" : "الإقامة لدينا" }
          desc={ChosingLan === 'en' ? "Experience the ultimate in comfortable living in our residential properties." : "استمتع بتجربة العيش المريح والمطلق في غرفنا السكنية.    " }
        />
        <div className="Api_sectionFQ2">
        <Booking img={img}
          ChosingLan={ChosingLan}
          title="Duplex Room"
          title2="2 floors suitable for families"
          desc="Newly refurnished luxury accommodation with finest quality linen & quality decor. Air Conditioning Electric Blankets,
         Ironing Boards, Mini Bar, Flat Screen & Free In house Movies,
         WiFi and Housekeeping by request."
          iconimg1={iconimg1}
          iconimg2={iconimg2}
          iconimg3={iconimg3}
          iconimg4={iconimg4}
          btn={<Button variant="primary">{ChosingLan === 'en' ? 'BOOK NOW': 'احجز الآن'}</Button>}
          price="$500"
          icondesc1={ChosingLan === 'en' ? '4 persons': 'أشخاص 4'}
          icondesc2={ChosingLan === 'en' ? 'Room Services': 'خدمة الغرف'}
          icondesc3={ChosingLan === 'en' ? 'Kingsize Bed': 'أسرة ذات حجم كبير'}
          icondesc4={ChosingLan === 'en' ? 'TV': 'تلفاز'}
        />
        </div>
        <VideoMA 
        ChosingLan={ChosingLan}
        />
        <div className={ChosingLan === 'en' ? "fq-our-info" : "fq-our-info fq-our-infoAr" }>
          <div>
            <h2><span> </span></h2>
            <h2>{ChosingLan === 'en' ? <>Our <span>Restaurants</span></>: <span>مطاعمنا</span> }</h2>
            <p className='p2' >{ChosingLan === 'en' ? "We're thrilled to serve you and we hope you have a wonderful dining experience. ": 'يسعدنا خدمتك ونأمل أن تحظى بتجربة طعام رائعة'} </p>
          </div>
          <div><button>{ChosingLan === 'en' ? 'Explore More': 'استكشف أكثر'}</button></div>
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
              <TheFooter 
              ChosingLan={ChosingLan}
              />
        </section>}
      </main>
    </>
  )
}

export default Home;