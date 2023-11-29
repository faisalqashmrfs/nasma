import "./../Style/Nav-style.css";
import nsma from "./../img/logo.svg";
import {Link, NavLink } from "react-router-dom";
import fecebookIcon from './../img/uil_facebook.svg';
import instagramIcon from './../img/instagram.svg';
import linkedinIcon from './../img/uil_linkedin.svg';
import youtubeIcon from './../img/youtube.svg';

const MyNavbar = ()=>{
    return(
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
)
}

export default MyNavbar;