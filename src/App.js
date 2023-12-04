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

function App()
{
    return(
      <>
      <MyNavbar />
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/blog"  element={<Blog/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/gallery" element={<Gallery/>}/>
        <Route path="/explore" element={<Explore/>}/>
        <Route path="/booking" element={<BookingSection/>}/>
      </Routes>
      <TheFooter/>
      </>
)
}
export default App;