import './Galleryson.css'

const Galleryson = (props) => {
  return (
    <div className='zh-gallery'>
        <div className='zh-img1'>
            <img src={props.img1}/>
        </div>
        <div className='zh-next-images'>
            <img className='zh-img2' src={props.img2}/>
            <img src={props.img3}/>
            <img src={props.img4}/>
        </div>
        <div className='zh-last-images'>
        <img className='zh-img5' src={props.img5}/>
        <img className='zh-img6' src={props.img6}/> 
        </div>
        <button className='zh-btn-gallery'>{props.btn}</button>
    </div>
  )
}

export default Galleryson