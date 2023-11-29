import './sm-HeroCard.css';
import anyimgcard from './../../img/B.png';

function HeroCard(props) {
  return (
    <div className='Hero-card-fq'>
        <div className='card-fqfq'>
            <div className='image'>
                <img src={anyimgcard} alt="" />
            </div>
            <h2>Duplex Room</h2>
            <p>2 floors suitable for families</p>
            <div className='fq-last-div'>
                <button>Book Now</button>
                <div>
                    <span>$500</span>
                    <p>pre Night</p>
                </div>
            </div>
        </div>
        <div className='card-fqfq'>
            <div className='image'>
                <img src={anyimgcard} alt="" />
            </div>
            <h2>Duplex Room</h2>
            <p>2 floors suitable for families</p>
            <div className='fq-last-div'>
                <button>Book Now</button>
                <div>
                    <span>$500</span>
                    <p>pre Night</p>
                </div>
            </div>
        </div>
        <div className='card-fqfq'>
            <div className='image'>
                <img src={anyimgcard} alt="" />
            </div>
            <h2>Duplex Room</h2>
            <p>2 floors suitable for families</p>
            <div className='fq-last-div'>
                <button>Book Now</button>
                <div>
                    <span>$500</span>
                    <p>pre Night</p>
                </div>
            </div>
        </div>
    </div>
  )
}


export default HeroCard
