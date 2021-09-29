import React from "react";

const Mi = ({noteClick, activeNote}) => {

    return ( <button onClick={() => {noteClick("Mi")}}>Mi</button> );
}

export default Mi;