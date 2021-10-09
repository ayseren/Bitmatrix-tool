import React from "react";

const Mi = ({noteClick, activeNote}) => {

    //activeNote parenttan childa
    //noteClick childdan parenta --callback props
    return ( <button onClick={() => {noteClick("Mi")}}>Mi</button> );
}

export default Mi;