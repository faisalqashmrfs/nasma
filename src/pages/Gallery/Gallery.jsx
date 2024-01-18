import Hero from "../components/Hero/Hero"
import imghero from "./../img/Gallry.png"
import Galleryson from "./components/Galleryson"
import imgheroY from "./../img/gallery.png"
import img1 from './assets/img/Rectangle 82.png'
import img2 from './assets/img/Rectangle 83.png'
import img5 from './assets/img/Group 510.png'
import img6 from './assets/img/Rectangle 86.png'
import img3 from './assets/img/Rectangle 84.png'
import img4 from './assets/img/Rectangle 85.png'
import OurSection from "../components/our-section/Our-section"
import shadowHero from './../img/box-shado-hero.png';
import FilterEX from "../components/FilterEX/FilterEX"

function Gallery() {
  return (
    <>
    <Hero imghero={imghero}
      titlehero="Resort Gallery"
      deschero="Welcome to our gallery of fun
                and distinctive photos and videos "
                shadowHero={shadowHero}
    />
        <FilterEX />
    <OurSection
        imghero={imgheroY}
        class2="our-section4"
        title='Our Chalets'
        desc='Welcome to our cozy chalet where comfort and relaxation await.'
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
