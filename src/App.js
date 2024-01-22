import React from "react";
import MyNavbar from './assets/component/MyNavbar'
import './style.css';
import Home from "./pages/Home/Home";
import Explore from "./pages/Explore/Explore";
import Blog from "./pages/Blog/Blog";
import Contact from "./pages/Contact/Contact";
import Gallery from "./pages/Gallery/Gallery";
import BookingSection from "./pages/Booking/BookingSection";
import TheFooter from "./assets/component/TheFooter";
import { Route, Routes } from "react-router-dom";
import ArticleBlog from "./pages/ArticleBlog/ArticleBlog";
import { useEffect, useState } from 'react';

function App() {
  const [lood, setlood] = useState(false)
  useEffect(() => {
    setlood(true)
    setTimeout(() => {
      setlood(false)
    }, 3000)
  }, [])


  const [togle, settogle] = useState(false)


  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1000) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <button
        onClick={scrollToTop}
        className={showButton ? 'activtoup' : 'Disactivtoup'}
      >
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" width="26" height="33" viewBox="0 0 26 53" fill="none">
            <rect x="0.75" y="0.75" width="24.5" height="36.5" rx="12.25" stroke="#FFFDFD" stroke-width="1.5" />
            <line x1="1.05981" y1="40.9576" x2="12.9576" y2="51.9402" stroke="white" stroke-width="1.5" stroke-linecap="round" />
            <line x1="0.75" y1="-0.75" x2="16.9418" y2="-0.75" transform="matrix(-0.734803 0.67828 0.67828 0.734803 26 41)" stroke="white" stroke-width="1.5" stroke-linecap="round" />
            <line x1="13" y1="6" x2="13" y2="14" stroke="white" stroke-width="2" stroke-linecap="round" />
          </svg>
        </div>
      </button>
      <MyNavbar
        togle={togle}
        settogle={settogle}
      />
      <Routes>
        <Route exact path="/" element={<Home togle={togle} lood={lood} />} />
        <Route path="/blog" element={<Blog togle={togle} />} />
        <Route path="/blog/Articl" element={<ArticleBlog togle={togle} />} />
        <Route path="/contact" element={<Contact togle={togle} />} />
        <Route path="/gallery" element={<Gallery togle={togle} />} />
        <Route path="/explore" element={<Explore togle={togle} />} />
        <Route path="/booking" element={<BookingSection togle={togle} />} />
      </Routes>

    </>
  )
}
export default App;