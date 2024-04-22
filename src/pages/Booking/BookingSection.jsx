import Hero from "../components/Hero/Hero"
import OurSection from "../components/our-section/Our-section"
import imghero from "./../img/Booking.png"
import Booking from './../components/Booking/Booking';
import shadowHero from './../img/box-shado-hero.png';
import book0 from './../img/book0.png';
import iconimg1 from './../img/cards/Vector.svg'
import iconimg2 from './../img/cards/Group (1).svg'
import iconimg3 from './../img/cards/Vector (3).svg'
import iconimg4 from './../img/cards/Group.svg'
import Button from 'react-bootstrap/Button';
import FilterBOKK from "../components/FilterBOKK/FilterBOKK";
import { useEffect, useState } from 'react';
import { CircleLoader } from 'react-spinners';
import TheFooter from "../../assets/component/TheFooter";
import axios from "axios";

function BookingSection({ togle , ChosingLan }) {

  const [lood, setlood] = useState(false)
  const [Bookin, setBookin] = useState([])

  useEffect(() => {

    const fetchPosts1 = async () => {
      setlood(true)
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/rooms`, {
          headers: {
            'Accept': 'application/json',
            'language': ChosingLan,
          }
        });
        setBookin(response.data.data);
        console.log(Bookin)
      } catch (error) {
        console.error('Error fetching users: ', error);
      }
      setlood(false)
    };

    fetchPosts1();
  }, [ChosingLan]);

  return (
    <main className={ChosingLan === 'en' ? "MainEnglesh" : "MainArabic" }>
      <Hero imghero={imghero}
        class={'zh-imgBooking'}
        titlehero={ChosingLan === 'en' ? "BOOKING" : "احجز لدينا"}
        deschero={ChosingLan === 'en' ? "Book for an Extraordinary Experiment!" : "احجز لدينا لتجربة غير عادية"}
        shadowHero={shadowHero}
        togle={togle}
      />
      {lood ? <div className='Looder'><CircleLoader color="#36d7b7" position="apsoliote" /></div> : <section>
      <div className='FilterBooking'>
            <div className='top-filterBook'>
                <div>
                    <h2>Let's suggest</h2>
                    <h5>If you are confused about choosing the right home for you.
                        Send your details and leave the rest to our room reservation team.</h5>
                </div>
                <button>Send info</button>
            </div>
            <div className='bottom-filterBook'>
                <h3>Or Search By</h3>
                <div className='dropsMnue'>
                    <div className='dropM1'>Price</div>
                    <div className='dropM2'>Room type</div>
                    <div className='dropM3'>Floor</div>
                    <button className='btn-finalone-filter'>Send info</button>
                </div>
            </div>
        </div>
        <OurSection
          imghero={book0}
          ChosingLan={ChosingLan}
          class2="our-section2"
          title={ChosingLan === "en" ? 'Our Residential' : 'الإقامة لدينا '}
          desc={ChosingLan === "en" ? 'With the best luxury spa, Gym and Pool experiences.' : 'استمتع بتجربة العيش المريح والمطلق في عقاراتنا السكنية.    '}
        />
        <div className="Api_sectionFQ2">
        {
            Bookin.map(item => (
              <div key={item.id}>
                <Booking img={item.images[0].image}
                ChosingLan={ChosingLan}
            title={item.name}
            title2={item.summary}
            desc={item.description}
            iconimg1={iconimg1}
            iconimg2={iconimg2}
            iconimg3={iconimg3}
            iconimg4={iconimg4}
            btn={<Button variant="primary">BOOK NOW</Button>}
            price={item.price_per_night}
            icondesc1={item.guest_number}
            icondesc2="Room Services"
            icondesc3="Kingsize Bed"
            icondesc4="TV"
            location={item.location}
          />
              </div>
            ))
          }
        </div>
        <div>
          <button>
            View More
          </button>
        </div>
        <TheFooter 
              ChosingLan={ChosingLan}
              />
      </section>}
    </main>
  )
}
export default BookingSection;
