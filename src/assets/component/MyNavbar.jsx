import "./../Style/Nav-style.css";
import nsma from "./../img/logo.svg";
import {Link } from "react-router-dom";

const MyNavbar = ()=>{
    return(
     <nav className="nav-fq-rec">
        <div>
            <div className="fq-iconssocial">
              <ul className="">
                <li>fec</li>
                <li>insta</li>
                <li>linked</li>
                <li>yout</li>
              </ul>
            </div>
            <div>
              <ul className="half-nav1">
                <Link className="link-nav" to={"/"}>Home</Link>
                <Link className="link-nav" to={"/explore"}>Explore</Link>
                <Link className="link-nav" to={"/booking"}>booking</Link>
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
              <li>EN</li>
            </ul>
          </div>
        <ul className="half-nav2">
                <Link className="link-nav" to={"/gallery"}>Gallery</Link>
                <Link className="link-nav" to={"/blog"}>Blog</Link>
                <Link className="link-nav" to={"/contact"}>Contact</Link>
              </ul>
        </div>
     </nav>
)
}

export default MyNavbar;