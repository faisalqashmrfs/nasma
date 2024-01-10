import './FilterBOKK.css'

export default function FilterBOKK() {
    return (
        <div className='FilterBooking'>
            <div className='top-filterBook'>
                <div>
                    <h2>Let's suggest</h2>
                    <h5>If you are confused about choosing the right home for you.
                        Send your details and leave the rest to our room reservation team.</h5>
                </div>
                <button>Send info</button>
            </div>
            <div className='bottom-filterBook'>
                <h3>Or Search By</h3>
                <div className='dropsMnue'>
                    <div className='dropM1'>Price</div>
                    <div className='dropM2'>Room type</div>
                    <div className='dropM3'>Floor</div>
                    <button className='btn-finalone-filter'>Send info</button>
                </div>
            </div>
        </div>
    )
}
