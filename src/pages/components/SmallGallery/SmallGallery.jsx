import './SmallGallery.css'

export default function SmallGallery(props) {
  return (
    <section className='SmallGallery'> 
        <div className='row1'>
            <img src={props.img1} alt="x" />
            <img src={props.img2} alt="x" />
            <img className='dispir' src={props.img3} alt="x" />
        </div>
        <div className='row2'>
            <img className='bigone' src={props.img4} alt="x" />
            <img className='smallone' src={props.img5} alt="x" />
        </div>
    </section>
  )
}
