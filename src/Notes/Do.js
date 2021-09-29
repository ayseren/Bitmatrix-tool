import React from "react";

const Do = ({noteClick}) => {
    return ( <button onClick={() => {noteClick("Do")}}>Do</button> );
}

export default Do;