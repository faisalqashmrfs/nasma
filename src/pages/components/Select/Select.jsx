import React, { useState } from "react";
import './Select.css'
function SelectMA() {
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };
  const [selectedOption2, setSelectedOption2] = useState("");

  const handleSelectChange2 = (e) => {
    setSelectedOption2(e.target.value);
  };

  const [selectedDate2, setSelectedDate2] = useState(null);
  const handleDateChange2 = (e) => {
    setSelectedDate2(e.target.value);
  }

  return (
    <div className="select-option">
      <div>
      <input type='date' value={selectedDate2} onChange={handleDateChange2} className='HJ_date2' />
      </div>

      <div>
        <select value={selectedOption2} onChange={handleSelectChange2}>
          <option value="" disabled hidden>Room type</option>
          <option value="option1">type 1</option>
          <option value="option2">type 2</option>
          <option value="option3">type 3</option>
        </select>
      </div>
    </div>

  );
}

export default SelectMA;