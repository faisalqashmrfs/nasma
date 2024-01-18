import './ArticleBlog.css';
import Hero from "../components/Hero/Hero";
import imgheroy from './../img/Group 512.png';
import imgheroy1 from './../img/Our-sectionImg/ex1.png';
import AboutArticle from '../components/AboutArticle/AboutArticle';
import OurSection from '../components/our-section/Our-section';
import SmallGallery from '../components/SmallGallery/SmallGallery';
import img1 from '../img/Article/top1.png';
import img2 from '../img/Article/top2.png';
import img3 from '../img/Article/top3.png';
import img4 from '../img/Article/bot1.png';
import img5 from '../img/Article/bot2.png';
import Smcards from '../components/Smcards/Smcards';
import smcardimg1 from './../img/smcardimg.png';
import smcardimg1sm from './../img/img smscreen.png';
import { Component } from 'react';

class ArticleBlog extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
  return (
    <>
      <Hero imghero={imgheroy}
        titlehero="About Mountain
      Breeze Resort"
      />

      <AboutArticle
        title="About Mountain Breeze Resort"
        Date="11/7/2023"
        descrip="Mountain Breeze Resort is a unique site for Rural Tourism in Syria.The resort, which is about 950 meters above sea level, lies in the midst of a natural forest and fascinatingly overlooks a marvelous valley, not to mention the fantastic view of the Mediterranean.
      The resort is characterized by its organic design in its relationship with the site and the surroundings, and its attempt to preserve the environment by applying sustainability standards, as the design was influenced by the local architecture of the region and presented it with a contemporary touch with the characteristics of the site by using natural and local materials that merge with the surroundings and achieve the required sustainability, such as the use of local stones in cladding the facades of the building and some interior elements Site floors and walls
      
      The chalets, 300 meters west of the hotel building, were designed with an overlay similar to the stone walls separating the lands and orchards in the mountainous areas, which are known in the spoken language in the project area as “Al-Ra’ousha”. With the help of 70 workers from the people of the neighboring villages"
        tag="#mountain_Breez , #Tourism"
      />
      <OurSection
        imghero={imgheroy1}
        title='Article Photos'
      />
      <SmallGallery 
      img1={img1}
      img2={img2}
      img3={img3}
      img4={img4}
      img5={img5}
      />
      <OurSection
        imghero={imgheroy1}
        title='Related Articles'
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
    </>
  )
}
}
export default ArticleBlog;