import Hero from "../components/Hero/Hero"
import OurSection from "../components/our-section/Our-section"
import imghero from "./../img/Explore.jpg"
import Booking from './../components/Booking/Booking';
import ImageGray from '../components/imagegray/ImageGray';
import shadowHero from './../img/box-shado-hero.png';
import ourimg1 from './../img/Our-sectionImg/ex1.png';
import ourimg2 from './../img/Our-sectionImg/ex2.png';
import ourimg3 from './../img/Our-sectionImg/ex3.png';
import ourimg4 from './../img/Our-sectionImg/ex4.png';
import ourimg5 from './../img/Our-sectionImg/ex5.png';
import ourimg6 from './../img/Our-sectionImg/ex6.png';
import ourimg7 from './../img/Our-sectionImg/ex7.png';
import FilterEX from "../components/FilterEX/FilterEX";
import { CircleLoader } from 'react-spinners';
import { useEffect, useState } from 'react';
import TheFooter from "../../assets/component/TheFooter";
import axios from "axios";
import { Element } from "react-scroll";


function Explore({ togle, ChosingLan }) {

  const [RestaurantCate, setRestaurantCate] = useState([]);
  const [ChaletsCate, setChaletsCate] = useState([]);
  const [ActivetiesCate, setActivetiesCate] = useState([]);
  const [The_NatureCate, setThe_NatureCate] = useState([]);
  const [PoolCate, setPoolCate] = useState([]);
  const [ConferencesCate, setConferencesCate] = useState([]);
  const [Sport_EventsCate, setSport_EventsCate] = useState([]);
  const [PostData, setPostData] = useState([]);
  const [ChaletData, setChaletData] = useState([]);
  const [ActivetiesData, setActivetiesData] = useState([]);
  const [The_NatureData, setThe_NatureData] = useState([]);
  const [PoolData, setPoolData] = useState([]);
  const [ConferencesData, setConferencesData] = useState([]);
  const [Sport_EventsData, setSport_EventsData] = useState([]);
  const [lood, setlood] = useState(false)

  // useEffect(() => {
  //   setlood(true)
  //   setTimeout(() => {
  //     setlood(false)
  //   },3000)
  // },[])

  useEffect(() => {
    const fetchCategory = async () => {
      setlood(true)
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/categories', {
          headers: {
            'Accept': 'application/json',
            'language': ChosingLan,
          }
        });
        setRestaurantCate(response.data.data[0]);
        setChaletsCate(response.data.data[1]);
        setActivetiesCate(response.data.data[2]);
        setThe_NatureCate(response.data.data[3]);
        setPoolCate(response.data.data[4]);
        setConferencesCate(response.data.data[6]);
        setSport_EventsCate(response.data.data[7]);
        // console.log(RestaurantCate.name)
      } catch (error) {
        console.error('Error fetching users: ', error);
      }
    };

    fetchCategory();
  }, [ChosingLan]);

  useEffect(() => {

    const fetchPosts = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/posts?category=${ChosingLan === 'ar' ? 'مطاعم' : 'Restaurant'}`, {
          headers: {
            'Accept': 'application/json',
            'language': ChosingLan,
          }
        });
        setPostData(response.data.data);
      } catch (error) {
        console.error('Error fetching users: ', error);
      }
    };

    fetchPosts();
  }, [ChosingLan]);

  useEffect(() => {

    const fetchPosts9 = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/posts?category=${ChosingLan === 'ar' ? 'شاليهات' : 'Chalets'}`, {
          headers: {
            'Accept': 'application/json',
            'language': ChosingLan,
          }
        });
        setChaletData(response.data.data);
      } catch (error) {
        console.error('Error fetching users: ', error);
      }
    };

    fetchPosts9();
  }, [ChosingLan]);

  useEffect(() => {

    const fetchPosts1 = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/posts?category=${ChosingLan === 'ar' ? 'النشاطات' : ' Activeties'}`, {
          headers: {
            'Accept': 'application/json',
            'language': ChosingLan,
          }
        });
        setActivetiesData(response.data.data);
      } catch (error) {
        console.error('Error fetching users: ', error);
      }
    };

    fetchPosts1();
  }, [ChosingLan]);

  useEffect(() => {

    const fetchPosts2 = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/posts?category=${ChosingLan === 'ar' ? 'الطبيعة' : ' The Nature'}`, {
          headers: {
            'Accept': 'application/json',
            'language': ChosingLan,
          }
        });
        setThe_NatureData(response.data.data);
      } catch (error) {
        console.error('Error fetching users: ', error);
      }
    };

    fetchPosts2();
  }, [ChosingLan]);

  useEffect(() => {

    const fetchPosts3 = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/posts?category=${ChosingLan === 'ar' ? 'المسابح' : ' Pool'}`, {
          headers: {
            'Accept': 'application/json',
            'language': ChosingLan,
          }
        });
        setPoolData(response.data.data);
      } catch (error) {
        console.error('Error fetching users: ', error);
      }
    };

    fetchPosts3();
  }, [ChosingLan]);

  useEffect(() => {

    const fetchPosts4 = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/posts?category=${ChosingLan === 'ar' ? 'مؤتمرات' : ' Conferences'}`, {
          headers: {
            'Accept': 'application/json',
            'language': ChosingLan,
          }
        });
        setConferencesData(response.data.data);
      } catch (error) {
        console.error('Error fetching users: ', error);
      }
    };

    fetchPosts4();
  }, [ChosingLan]);

  useEffect(() => {

    const fetchPosts5 = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/posts?category=${ChosingLan === 'ar' ? 'أحداث رياضية' : ' Sport Events'}`, {
          headers: {
            'Accept': 'application/json',
            'language': ChosingLan,
          }
        });
        setSport_EventsData(response.data.data);
      } catch (error) {
        console.error('Error fetching users: ', error);
      }
      setlood(false)
    };

    fetchPosts5();
  }, [ChosingLan]);

  return (
    <main className={ChosingLan === 'en' ? "MainEnglesh" : "MainArabic" }>
      <Hero imghero={imghero}
        class={'zh-imgExplore'}
        titlehero={ChosingLan === 'en' ? "Explore The Resort" : "اكتشف المنتجع"}
        deschero={ChosingLan === 'en' ? "Explore all sections of the resort" : "اكتشف معنا جميع اقسام المنتجع"}
        togle={togle}
        shadowHero={shadowHero}

      />
      {lood ? <div className='Looder'><CircleLoader color="#36d7b7" position="apsoliote" /></div> : <section >
        <FilterEX />
        <div className="fq-our-info2">
          <div>
            <h2><span>RESORT</span> FACILITIES</h2>
            <p className='p1' >Experience the ultimate in comfortable living in our residential properties.</p>
          </div>
          <div><button>View More</button></div>
        </div>
        <Element name="RestaurantCate">
          <OurSection
            ChosingLan={ChosingLan}
            imghero={ourimg1}
            title={RestaurantCate.name}
            desc={RestaurantCate.summary}
          />
        </Element>
        <div className="Api_sectionFQ">
          {
            PostData.map(item => (
              <div key={item.id}>
                <Booking img={item.images[0].image}
                 ChosingLan={ChosingLan}
                  class="zh-section2"
                  title={item.title}
                  title2={item.summary}
                  desc={item.description}
                />
              </div>
            ))
          }
        </div>
        <ImageGray />
        <Element name="ChaletsCate">
          <OurSection
            ChosingLan={ChosingLan}
            imghero={ourimg2}
            title={ChaletsCate.name}
            desc={ChaletsCate.summary}
          />
        </Element>
        <div className="Api_sectionFQ">
          {
            ChaletData.map(item => (
              <div key={item.id}>
                <Booking img={item.images[0].image}
                  ChosingLan={ChosingLan}
                  class="zh-section2"
                  title={item.title}
                  title2={item.summary}
                  desc={item.description}
                />
              </div>
            ))
          }
        </div>

        <Element name="ActivetiesCate">
          <OurSection
            ChosingLan={ChosingLan}
            imghero={ourimg3}
            title={ActivetiesCate.name}
            desc={ActivetiesCate.summary}
          />
        </Element>
        <div className="Api_sectionFQ">
          {
            ActivetiesData.map(item => (
              <div key={item.id}>
                <Booking img={item.images[0].image}
                  ChosingLan={ChosingLan}
                  class="zh-section2"
                  title={item.title}
                  title2={item.summary}
                  desc={item.description}
                />
              </div>
            ))
          }
        </div>
        <Element name="The_NatureCate">
          <OurSection
            ChosingLan={ChosingLan}
            imghero={ourimg4}
            title={The_NatureCate.name}
            desc={The_NatureCate.summary}
          />
        </Element>
        <div className="Api_sectionFQ">
          {
            The_NatureData.map(item => (
              <div key={item.id}>
                <Booking img={item.images[0].image}
                ChosingLan={ChosingLan}
                  class="zh-section2"
                  title={item.title}
                  title2={item.summary}
                  desc={item.description}
                />
              </div>
            ))
          }
        </div>
        <Element name="PoolCate">
          <OurSection
            ChosingLan={ChosingLan}
            imghero={ourimg5}
            title={PoolCate.name}
            desc={PoolCate.summary}
          />
        </Element>
        <div className="Api_sectionFQ">
          {
            PoolData.map(item => (
              <div key={item.id}>
                <Booking img={item.images[0].image}
                ChosingLan={ChosingLan}
                  class="zh-section2"
                  title={item.title}
                  title2={item.summary}
                  desc={item.description}
                />
              </div>
            ))
          }
        </div>
        
        <Element name="ConferencesCate">
        <OurSection
          ChosingLan={ChosingLan}
          imghero={ourimg6}
          title={ConferencesCate.name}
          desc={ConferencesCate.summary}
        />
        </Element>
        <div className="Api_sectionFQ">
          {
            ConferencesData.map(item => (
              <div key={item.id}>
                <Booking img={item.images[0].image}
                ChosingLan={ChosingLan}
                  class="zh-section2"
                  title={item.title}
                  title2={item.summary}
                  desc={item.description}
                />
              </div>
            ))
          }
        </div>
        <OurSection
          ChosingLan={ChosingLan}
          imghero={ourimg7}
          title={Sport_EventsCate.name}
          desc={Sport_EventsCate.summary}
        />
        <div className="Api_sectionFQ">
          {
            Sport_EventsData.map(item => (
              <div key={item.id}>
                <Booking img={item.images[0].image}
                ChosingLan={ChosingLan}
                  class="zh-section2"
                  title={item.title}
                  title2={item.summary}
                  desc={item.description}
                />
              </div>
            ))
          }
        </div>
        <TheFooter 
              ChosingLan={ChosingLan}
              />
      </section>}

    </main>
  )
}
export default Explore;
