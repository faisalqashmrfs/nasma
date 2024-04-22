import { Link } from 'react-router-dom'
import './ImageGray.css'

function ImageGray({ChosingLan}) {
  return (
    <div className='imagesg'>

      <Link to="./gallery">
        <div className='fi'>
          <div className='firstimg'>
            <h1>{ChosingLan === 'en' ? 'GYM': 'النادي الرياضي'}</h1>
          </div>
          <div className='mytext'>
            <h1>{ChosingLan === 'en' ? 'GYM': 'النادي الرياضي'}</h1>
            <p></p>
            <p>{ChosingLan === 'en' ? 'Never stop your daily activity': 'لا تتوقف أبدًا عن نشاطك اليومي'}</p>
          </div>
        </div>
        <div className='fq-my1'>
          <div className='shadowwww'>
          </div>
          <h1>{ChosingLan === 'en' ? 'GYM': 'النادي الرياضي'}</h1>
          <p>{ChosingLan === 'en' ? 'Never stop your daily activity': 'لا تتوقف أبدًا عن نشاطك اليومي'}</p>
        </div>
      </Link>
      <Link to="./gallery">
        <div className='se'>
          <div className='firstimg'>
            <h1>{ChosingLan === 'en' ? 'SPA': 'الخدمات الصحية'}</h1>
          </div>
          <div className='mytext'>

            <h1>{ChosingLan === 'en' ? 'SPA': 'الخدمات الصحية'}</h1>
            <p>{ChosingLan === 'en' ? 'Relax in our massage room': 'استرخ في غرفة التدليك لدينا'}</p>
          </div>
        </div>
        <div className='fq-my2'>
          <div className='shadowwww'>
          </div>
          <h1>{ChosingLan === 'en' ? 'SPA': 'الخدمات الصحية'}</h1>
          <p>{ChosingLan === 'en' ? 'Relax in our massage room': 'استرخ في غرفة التدليك لدينا'}</p>
        </div>
      </Link>
      <Link to="./gallery">
        <div className='th'>
          <div className='firstimg'>
            <h1>{ChosingLan === 'en' ? 'POOL': 'المسبح'}</h1>
            <h1></h1>
          </div>
          <div className='mytext'>
            <h1>{ChosingLan === 'en' ? 'POOL': 'المسبح'}</h1>
            <p>{ChosingLan === 'en' ? 'Outdoor pool & indoor': 'حمام سباحة خارجي وداخلي'}</p>
          </div>
        </div>
        <div className='fq-my3'>
          <div className='shadowwww'>
          </div>
          <h1>{ChosingLan === 'en' ? 'POOL': 'المسبح'}</h1>
          <p>{ChosingLan === 'en' ? 'Outdoor pool & indoor': 'حمام سباحة خارجي وداخلي'} </p>
        </div>
      </Link>
    </div>
  )
}

export default ImageGray