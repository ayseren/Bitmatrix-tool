import React, { useState } from "react";

function LittleEndian(){
    const [inputValue, setInputValue] = useState("");

    const changingValue = (event) => {
        setInputValue(event.target.value)
    }
    
    const littleEndianness = (string) => {
        const result = [];
        let len = string.length - 2;
        while (len >= 0) {
          result.push(string.substr(len, 2));
          len -= 2;
        }
        return result.join('');
    }

    //butona tiklanarak spana gonderme nasil yapilir

    return (
        <div className="littleEndianArea stringDiv">
            <textarea id="stingCalculator" name="stingCalculator" rows="4" cols="50" value={inputValue} onChange={changingValue}/>
            <br />
            <span>{littleEndianness(inputValue)}</span>
        </div>
    );
}

export default LittleEndian;