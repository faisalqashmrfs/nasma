import React from "react";
import MyNavbar from  './assets/component/MyNavbar'
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

function App()
{
  const [togle , settogle] = useState(false)


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

    return(
      <>
      <button
      onClick={scrollToTop}
      className={showButton ? 'activtoup' : 'Disactivtoup' }
    >
      Back to Top
    </button>
      <MyNavbar 
      togle={togle}
      settogle={settogle}
      />
      <Routes>
        <Route exact path="/" element={<Home togle={togle}/>}/>
        <Route path="/blog"  element={<Blog togle={togle}/>}/>
        <Route path="/blog/Articl"  element={<ArticleBlog togle={togle}/>}/>
        <Route path="/contact" element={<Contact togle={togle}/>}/>
        <Route path="/gallery" element={<Gallery togle={togle}/>}/>
        <Route path="/explore" element={<Explore togle={togle}/>}/>
        <Route path="/booking" element={<BookingSection togle={togle}/>}/>
      </Routes>
      <TheFooter/>
      </>
)
}
export default App;