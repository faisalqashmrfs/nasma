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

  return (
    <div  className="select-option">
      <div>
      <select value={selectedOption} onChange={handleSelectChange} >
        <option value="" className="option " disabled hidden>Check-in date *</option>
        <option value="option1">date 1</option>
        <option value="option2">date 2</option>
        <option value="option3">date 3</option>
      </select>
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