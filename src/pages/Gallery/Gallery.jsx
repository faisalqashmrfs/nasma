import Hero from "../components/Hero/Hero"
import imghero from "./../img/Gallry.png"
import Galleryson from "./components/Galleryson"
import imgheroY from "./../img/Explore.jpg"
import img1 from './assets/img/Rectangle 82.png'
import img2 from './assets/img/Rectangle 83.png'
import img5 from './assets/img/Group 510.png'
import img6 from './assets/img/Rectangle 86.png'
import img3 from './assets/img/Rectangle 84.png'
import img4 from './assets/img/Rectangle 85.png'
import OurSection from "../components/our-section/Our-section"


function Gallery() {
  return (
    <>
    <Hero imghero={imghero}
      titlehero="Resort Gallery"
      deschero="Welcome to our gallery of fun
                and distinctive photos and videos "
    />
    <OurSection
        imghero={imgheroY}
    />
    <Galleryson 
    img1={img1}
    img2={img2} 
    img3={img3}
    img4={img4}          
    img5={img5}          
    img6={img6}  
    btn="View More"     
    />
    </>
  )
}
export default Gallery
