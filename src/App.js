import React from "react";
import './style.css';
import Home from "./pages/Home/Home";
import Explore from "./pages/Explore/Explore";
import Blog from "./pages/Blog/Blog";
import Contact from "./pages/Contact/Contact";
import Gallery from "./pages/Gallery/Gallery";
import BookingSection from "./pages/Booking/BookingSection";
import { Route, Routes } from "react-router-dom";
import ArticleBlog from "./pages/ArticleBlog/ArticleBlog";
import { useEffect, useState } from 'react';
import { NavLink } from "react-router-dom";
import nsma from "./assets/img/logo.svg";
import "./assets/Style/Nav-style.css";
import fecebookIcon from './assets/img/uil_facebook.svg';
import instagramIcon from './assets/img/instagram.svg';
import linkedinIcon from './assets/img/uil_linkedin.svg';
import telegramIcon from './assets/img/youtube.svg';
import { FaTelegramPlane } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa6";


function App() {

  const [ChosingLan, setChosingLan] = useState("en")

  const ChangeLan = (Prope) => {
    setChosingLan(Prope)
  }
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

  function changTogle() {
    settogle(!togle)
  }

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
      <main className={ChosingLan === 'en' ? "MainEnglesh" : "MainArabic"}>
        <nav className="nav-fq-rec">
          <div>
            <div className="fq-iconssocial">
              <ul className="">
                <li>
                  <Link target="_blank" to={'https://www.facebook.com/MountainBreezeResort1'}>
                    <img src={fecebookIcon} alt="fecebookIcon" />
                  </Link>
                </li>
                <li>
                  <Link to={'https://www.instagram.com/mountain.breeze.resort?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='}>
                    <img src={instagramIcon} alt="instagramIcon" />
                  </Link>
                </li>
                {/* <li><img src={linkedinIcon} alt="linkedinIcon" /></li> */}
                <li className="IconStranger FQmagString">
                  <Link target="_blank" to={'https://whatsapp.com/channel/0029VaONWu14CrfeIRVEJM2k'}>
                    <FaWhatsapp color="#004E6B" size={15} />
                  </Link>
                </li>
                <li className="IconStranger">
                  <Link target="_blank" to={'https://t.me/mountainbreezeresort'}>
                    <FaTelegramPlane color="#004E6B" />
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <ul className="half-nav1">
                <NavLink exact
                  className={({ isActive, isPending }) =>
                    isPending ? "link-nav" : isActive ? "active" : "link-nav"
                  } to={"/"}>{ChosingLan === 'en' ? "Home" : "الرئيسية"}</NavLink>
                <NavLink
                  className={({ isActive, isPending }) =>
                    isPending ? "link-nav" : isActive ? "active" : "link-nav"
                  } to={"/explore"}>{ChosingLan === 'en' ? "Explore" : "اكتشف"}</NavLink>
                <NavLink
                  className={({ isActive, isPending }) =>
                    isPending ? "link-nav" : isActive ? "active" : "link-nav"
                  } to={"/booking"}>{ChosingLan === 'en' ? "booking" : "الحجز"}</NavLink>
              </ul>
            </div>
          </div>
          <div className="fq-nac-center">
            <img src={nsma} alt="####" />
          </div>
          <div>
            <div className="AR-EN">
              <ul>
                <li onClick={() => ChangeLan('ar')}
                  className={ChosingLan == 'ar' ? 'chose-one' : ''}
                >AR</li>
                <li>|</li>
                <li
                  onClick={() => ChangeLan('en')}
                  className={ChosingLan == 'en' ? 'chose-one' : ''}
                >EN</li>
              </ul>
            </div>
            <ul className="half-nav2">
              <NavLink
                className={({ isActive, isPending }) =>
                  isPending ? "link-nav" : isActive ? "active" : "link-nav"
                } to={"/gallery"}>{ChosingLan === 'en' ? "Gallery" : "المعرض"}</NavLink>
              <NavLink
                className={({ isActive, isPending }) =>
                  isPending ? "link-nav" : isActive ? "active" : "link-nav"
                } to={"/blog"}>{ChosingLan === 'en' ? "Blog" : "المدونة"}</NavLink>
              <NavLink
                className={({ isActive, isPending }) =>
                  isPending ? "link-nav" : isActive ? "active" : "link-nav"
                } to={"/contact"}>{ChosingLan === 'en' ? "Contact" : "اتصل بنا"}</NavLink>
            </ul>
          </div>
        </nav>

        <nav className={togle ? 'fq-mobile-nav1' : 'fq-mobile-nav'}>
          <div className="head">
            <div className="lang-change">
              <ul>
                <li onClick={() => ChangeLan('ar')}
                  className={ChosingLan == 'ar' ? 'chose-one' : ''}
                >AR</li>
                <li>|</li>
                <li
                  onClick={() => ChangeLan('en')}
                  className={ChosingLan == 'en' ? 'chose-one' : ''}
                >EN</li>
              </ul>
            </div>
            <div className="logo-mobile"> <img src={nsma} alt="####" /></div>
            <div
              onClick={() => changTogle()}
              className="toglr-mobile">
              <svg
                xmlns="http://www.w3.org/2000/svg" width="20" height="15" viewBox="0 0 20 15" fill="none">
                <path d="M19.6227 14.2602H0.377278C0.168895 14.2602 0 14.0913 0 13.8829C0 13.6746 0.168895 13.5057 0.377278 13.5057H19.6227C19.8311 13.5057 20 13.6746 20 13.8829C20 14.0913 19.8311 14.2602 19.6227 14.2602ZM19.6227 7.50737H0.377278C0.168895 7.50737 0 7.33847 0 7.13009C0 6.92171 0.168895 6.75281 0.377278 6.75281H19.6227C19.8311 6.75281 20 6.92171 20 7.13009C20 7.33847 19.8311 7.50737 19.6227 7.50737ZM19.6227 0.754556H0.377278C0.168895 0.754556 0 0.585661 0 0.377278C0 0.168895 0.168895 0 0.377278 0H19.6227C19.8311 0 20 0.168895 20 0.377278C20 0.585661 19.8311 0.754556 19.6227 0.754556Z" fill="white"
                />
              </svg>
            </div>
          </div>
        </nav>
        <div

          className={togle ? 'bode-nav-mobile' : 'bode-nav-mobile1'}>
          <ul className="toglechangg">
            <NavLink exact
              onClick={() => changTogle()}
              className={({ isActive, isPending }) =>
                isPending ? "link-nav" : isActive ? "active" : "link-nav"
              } to={"/"}>Home</NavLink>
            <NavLink
              onClick={() => changTogle()}
              className={({ isActive, isPending }) =>
                isPending ? "link-nav" : isActive ? "active" : "link-nav"
              } to={"/explore"}>Explore</NavLink>
            <NavLink
              onClick={() => changTogle()}
              className={({ isActive, isPending }) =>
                isPending ? "link-nav" : isActive ? "active" : "link-nav"
              } to={"/booking"}>booking</NavLink>
            <NavLink
              onClick={() => changTogle()}
              className={({ isActive, isPending }) =>
                isPending ? "link-nav" : isActive ? "active" : "link-nav"
              } to={"/gallery"}>Gallery</NavLink>
            <NavLink
              onClick={() => changTogle()}
              className={({ isActive, isPending }) =>
                isPending ? "link-nav" : isActive ? "active" : "link-nav"
              } to={"/blog"}>Blog</NavLink>
            <NavLink
              onClick={() => changTogle()}
              className={({ isActive, isPending }) =>
                isPending ? "link-nav" : isActive ? "active" : "link-nav"
              } to={"/contact"}>Contact</NavLink>
          </ul>
          <div className="keep">
            <span>Keep In Touch</span>
            <div className="fq-iconssocial">
              <ul className="mobile-nav-social">
                <li><img src={fecebookIcon} alt="fecebookIcon" /></li>
                <li><img src={instagramIcon} alt="instagramIcon" /></li>
                <li><img src={linkedinIcon} alt="linkedinIcon" /></li>
                <li className="IconStranger"><FaTelegramPlane color="#004E6B" /></li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Routes>
        <Route exact path="/" element={<Home togle={togle} lood={lood} ChosingLan={ChosingLan} />} />
        <Route path="/explore" element={<Explore togle={togle} ChosingLan={ChosingLan} />} />
        <Route path="/booking" element={<BookingSection togle={togle} ChosingLan={ChosingLan} />} />
        <Route path="/gallery" element={<Gallery togle={togle} ChosingLan={ChosingLan} />} /> 
        <Route path="/blog" element={<Blog togle={togle} ChosingLan={ChosingLan} />} />
        <Route path="/blog/Articl" element={<ArticleBlog togle={togle} ChosingLan={ChosingLan} />} />
        <Route path="/contact" element={<Contact togle={togle} ChosingLan={ChosingLan} />} />
      </Routes>

    </>
  )
}
export default App;