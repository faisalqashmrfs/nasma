import Hero from "../components/Hero/Hero"
import imgheroy from "./../img/B.png"
import smcardimg1 from './../img/smcardimg.png';
import smcardimg1sm from './../img/img smscreen.png';
import Smcards from "../components/Smcards/Smcards";
import imghero from './../img/Group 512.png';
import OurSection from '../components/our-section/Our-section';


function Blog() {
  return (
    <>
    <Hero imghero={imgheroy}
      titlehero="Learn about Mountain Breeze"
      deschero="Welcome to our blog where you can learn about the wonders of our resort"
    />
    <OurSection 
        imghero={imghero}
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
    </>
  )
}
export default Blog
