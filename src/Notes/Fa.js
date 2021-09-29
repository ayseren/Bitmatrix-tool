import React from "react";

const Fa = ({noteClick, buttonDisabled}) => {
    return ( <button onClick={() => {noteClick("Fa")}} disabled={buttonDisabled}>Fa</button> );
}

export default Fa;