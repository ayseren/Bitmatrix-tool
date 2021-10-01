import React from "react";

const La = ({noteClick}) => {
    return ( <button onClick={() => (noteClick("La"))}>La</button> );
}

export default La;