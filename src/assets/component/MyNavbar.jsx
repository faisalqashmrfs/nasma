import "./../Style/Nav-style.css";
import nsma from "./../img/logo.svg";
import { NavLink } from "react-router-dom";
import fecebookIcon from './../img/uil_facebook.svg';
import instagramIcon from './../img/instagram.svg';
import linkedinIcon from './../img/uil_linkedin.svg';
import youtubeIcon from './../img/youtube.svg';
import { useState } from "react";

const MyNavbar = () => {

  const [togle , settogle] = useState(true)

  function changTogle(){
    settogle(!togle)
  }
  return (
    <>
      <nav className="nav-fq-rec">
        <div>
          <div className="fq-iconssocial">
            <ul className="">
              <li><img src={fecebookIcon} alt="fecebookIcon" /></li>
              <li><img src={instagramIcon} alt="instagramIcon" /></li>
              <li><img src={linkedinIcon} alt="linkedinIcon" /></li>
              <li><img src={youtubeIcon} alt="youtubeIcon" /></li>
            </ul>
          </div>
          <div>
            <ul className="half-nav1">
              <NavLink exact
                className={({ isActive, isPending }) =>
                  isPending ? "link-nav" : isActive ? "active" : "link-nav"
                } to={"/"}>Home</NavLink>
              <NavLink
                className={({ isActive, isPending }) =>
                  isPending ? "link-nav" : isActive ? "active" : "link-nav"
                } to={"/explore"}>Explore</NavLink>
              <NavLink
                className={({ isActive, isPending }) =>
                  isPending ? "link-nav" : isActive ? "active" : "link-nav"
                } to={"/booking"}>booking</NavLink>
            </ul>
          </div>
        </div>
        <div>
          <img src={nsma} alt="####" />
        </div>
        <div>
          <div className="AR-EN">
            <ul>
              <li>AR</li>
              <li>|</li>
              <li className="chose-one">EN</li>
            </ul>
          </div>
          <ul className="half-nav2">
            <NavLink
              className={({ isActive, isPending }) =>
                isPending ? "link-nav" : isActive ? "active" : "link-nav"
              } to={"/gallery"}>Gallery</NavLink>
            <NavLink
              className={({ isActive, isPending }) =>
                isPending ? "link-nav" : isActive ? "active" : "link-nav"
              } to={"/blog"}>Blog</NavLink>
            <NavLink
              className={({ isActive, isPending }) =>
                isPending ? "link-nav" : isActive ? "active" : "link-nav"
              } to={"/contact"}>Contact</NavLink>
          </ul>
        </div>
      </nav>

      <nav className={togle ? 'fq-mobile-nav1' : 'fq-mobile-nav'}>
        <div className="head">
          <div className="lang-change">EN | AR</div>
          <div className="logo-mobile"> <img src={nsma} alt="####" /></div>
          <div className="toglr-mobile">
            <svg 
            onClick={() => changTogle()}
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
              <li><img src={youtubeIcon} alt="youtubeIcon" /></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default MyNavbar;