import './PopUpBooking.css'

function PopUpBooking({ open , children }) {
  if (!open) return null
    const Button_WRapper_Styly = "MoudelButton" 
    
  return (
      <>
      <div className='overlayer-fq'></div>
    <div className='popup-fq'>
      { children }
    </div>
      </>
  )
}

export default PopUpBooking