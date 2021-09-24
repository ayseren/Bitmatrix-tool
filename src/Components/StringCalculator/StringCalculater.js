import React, { useState } from "react";

const StringCalculator = () => {

    const [inputValue, setInputValue] = useState("");
    const [inputValueLength, setInputValueLength] = useState(0);

    const inputChange = (event) => {
        setInputValue(event.target.value);
        setInputValueLength(event.target.value.length);
    }

    return (
        <div className="stringDiv">
            <label htmlFor="stingCalculator">String Calculator</label>

            <textarea id="stingCalculator" name="stingCalculator" rows="4" cols="50" value={inputValue} onChange={inputChange}/>

            <span>{inputValueLength} characters.</span>
        </div>
    )
}

export default StringCalculator;