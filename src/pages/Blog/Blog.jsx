import Hero from "../components/Hero/Hero"
import imgheroy from "./../img/B.png"
import smcardimg1 from './../img/smcardimg.png';
import smcardimg1sm from './../img/img smscreen.png';
import Smcards from "../components/Smcards/Smcards";
import imghero from './../img/Our-sectionImg/ex2.png';
import OurSection from '../components/our-section/Our-section';
import shadowHero from './../img/box-shado-hero.png';
import FilterBlog from "../components/FilterBlog/FilterBlog";
import { useEffect, useState } from 'react';
import { CircleLoader } from 'react-spinners';
import TheFooter from "../../assets/component/TheFooter";

function Blog({togle}) {

  const [lood , setlood] = useState(false)
  useEffect(() => {
    setlood(true)
    setTimeout(() => {
      setlood(false)
    },3000)
  },[])

  return (
    <>
    <Hero imghero={imgheroy}
      titlehero="Learn about Mountain Breeze"
      deschero="Welcome to our blog where you can learn about the wonders of our resort"
      shadowHero={shadowHero}
      togle={togle}
   />
   {lood ? <div className='Looder'><CircleLoader color="#36d7b7" position="apsoliote"/></div> :
    <section>
      <FilterBlog/>
    <OurSection 
        imghero={imghero}
        class2="our-section3"
        title='Our Residential'
        desc='Experience the ultimate in comfortable living in our residential properties.'
        />
      <Smcards
            smcardimg1={smcardimg1}
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
      <Smcards smcardimg1={smcardimg1}
             smcardimg1sm={smcardimg1sm}
             title1="The 13 most incredible experiences"
             title1sm="Our history"
             desc1="when did we start and how did we start and how ..."
             desc1sm="A simple and peaceful life how did we start and how..."
             date="July 17, 2023"
             btn="Read Article"
             btnsm="learn more"
             class="zh-smcards-container1"

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
      <Smcards smcardimg1={smcardimg1}
             smcardimg1sm={smcardimg1sm}
             title1="The 13 most incredible experiences"
             title1sm="Our history"
             desc1="when did we start and how did we start and how ..."
             desc1sm="A simple and peaceful life how did we start and how..."
             date="July 17, 2023"
             btn="Read Article"
             btnsm="learn more"
             class="zh-smcards-container1"

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
    <TheFooter/>
    </section>
   }
    </>
  )
}
export default Blog
