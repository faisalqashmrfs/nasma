import Hero from "../components/Hero/Hero"
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
import axios from "axios";

function Blog({ togle, ChosingLan }) {

  const [articles , setarticles] = useState([])
  const [lood, setlood] = useState(false)
  // useEffect(() => {
  //   setlood(true)
  //   setTimeout(() => {
  //     setlood(false)
  //   }, 3000)
  // }, [])

  
  useEffect(() => {

    const fetcharticles = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/articles`, {
          headers: {
            'Accept': 'application/json',
            'language': ChosingLan,
          }
        });
        console.log(articles)
        setarticles(response.data.data);
      } catch (error) {
        console.error('Error fetching users: ', error);
      }
    };

    fetcharticles();
  }, [ChosingLan]);


  return (
    <main className={ChosingLan === 'en' ? "MainEnglesh" : "MainArabic"}>
      <Hero
        class={'zh-imgBlog'}
        titlehero={ChosingLan === 'en' ? "Learn about Mountain Breeze" : "تعرف على منتجع نسمة جبل"}
        deschero={ChosingLan === 'en' ? "Welcome to our blog where you can learn about the wonders of our resort" : "مرحبًا بكم في مدونتنا حيث يمكنك التعرف على عجائب منتجعنا"}
        shadowHero={shadowHero}
        togle={togle}
      />
      {lood ? <div className='Looder'><CircleLoader color="#36d7b7" position="apsoliote" /></div> :
        <section>
          <FilterBlog />
          <OurSection
            ChosingLan={ChosingLan}
            imghero={imghero}
            class2="our-section3"
            title={ChosingLan === 'en' ? "Our Articles" : "مقالاتنا"}
            desc={ChosingLan === 'en' ? "Learn more about our rich history and nature." : "تعرف على المزيد حول تاريخنا الغني وطبيعتنا"}
          />
          <div className="zh-smcards-container">
          {
            articles.map(item => (
              <div key={item.id}>
                <Smcards 
                  smcardimg1={item.images[0].image}
                  smcardimg1sm={item.images[0].image}
                  title1={item.title}
                  title1sm={item.title}
                  desc1={item.description}
                  desc1sm={item.description}
                  date={item.created_at}
                  btn="Read Article"
                  btnsm="learn more"
                />
              </div>
            ))
          }
        </div>
          {/* <Smcards
            smcardimg1={smcardimg1}
            smcardimg1sm={smcardimg1sm}
            title1="The 13 most incredible experiences"
            title1sm="Our history"
            desc1="when did we start and how did we start and how ..."
            desc1sm="A simple and peaceful life how did we start and how..."
            date="July 17, 2023"
            btn="Read Article"
            btnsm="learn more"
          /> */}
          <TheFooter
            ChosingLan={ChosingLan}
          />
        </section>
      }
    </main>
  )
}
export default Blog
