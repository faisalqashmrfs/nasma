import { Link } from 'react-router-dom'
import './ImageGray.css'

function ImageGray() {
  return (
    <div className='imagesg'>

      <Link to="./gallery">
        <div className='fi'>
          <div className='firstimg'>
            <h1>GYM</h1>
          </div>
          <div className='mytext'>
            <h1>GYM</h1>
            <p>Never stop your daily activity</p>
          </div>
        </div>
        <div className='fq-my1'>
          <div className='shadowwww'>
          </div>
          <h1>GYM</h1>
          <p>Never stop your daily activity</p>
        </div>
      </Link>
      <Link to="./gallery">
        <div className='se'>
          <div className='firstimg'>
            <h1>POOL</h1>
          </div>
          <div className='mytext'>

            <h1>POOL</h1>
            <p>Outdoor pool & indoor </p>
          </div>
        </div>
        <div className='fq-my2'>
          <div className='shadowwww'>
          </div>
          <h1>POOL</h1>
          <p>Outdoor pool & indoor </p>
        </div>
      </Link>
      <Link to="./gallery">
        <div className='th'>
          <div className='firstimg'>
            <h1>SPA</h1>
          </div>
          <div className='mytext'>
            <h1>SPA</h1>
            <p>Relax in our massage room</p>
          </div>
        </div>
        <div className='fq-my3'>
          <div className='shadowwww'>
          </div>
          <h1>SPA</h1>
          <p>Relax in our massage room </p>
        </div>
      </Link>
    </div>
  )
}

export default ImageGray