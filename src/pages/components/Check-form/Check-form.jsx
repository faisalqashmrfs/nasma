import './Check-form.css'
import SelectMA from '../Select/Select'
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function CheckMAFFF({ onClose }) {

  const [selectedDate, setSelectedDate] = useState(null);

  const [selectedOption3, setSelectedOption3] = useState("");

  const handleSelectChange3 = (e) => {
    setSelectedOption3(e.target.value);
  };

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  }


  return (
    <div id='check'>
      <span onClick={onClose} className='Fq-closwone'>X</span>
      <div className='form'>
        <p className='top-text'>Check availability Form:</p>
        <div className='col'>
          <p className='text'> Contact information:</p>
          <div className='row'>
            <div className='groub'>
              <div className='input-groub'>
                <input className='input' />
                <label className='placeholder'>Full name <span>*</span></label>
              </div>
              <div className='input-groub'>
                <input className='input' />
                <label className='placeholder'>Email address</label>
              </div>
            </div>
            <div className='groub'>
              <div className='input-groub'>
                <input className='input' />
                <label className='placeholder'>Phone number <span>*</span></label>
                <p className='text-bottom'>WhatsApp available</p>
              </div>
            </div>
          </div>
        </div>

        <div className='col'>
          <p className='text'>Holiday information:</p>
          <div className='row'>
            <div className='groub2'>
              <SelectMA />
            </div>
            <div className='groub2'>
              <div className='input-groub'>
                <div>
                <input type='date' value={selectedDate} onChange={handleDateChange} className='HJ_date' />
                </div>
              </div>

              <div className='input-groub'>
                <div>
                  <select value={selectedOption3} onChange={handleSelectChange3}>
                    <option value="" disabled hidden>Guests number <span>*</span></option>
                    <option value="option1">1</option>
                    <option value="option2">2</option>
                    <option value="option3">3</option>
                    <option value="option3">4</option>
                    <option value="option3">5</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className='input-groub'>
          <input className='input inp' />
          <label className='placeholder'>Description</label>
        </div>
      </div>
      <button onClick={onClose}>Book Now</button>
    </div>
  )
}

export default CheckMAFFF