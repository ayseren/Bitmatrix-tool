import React from "react";

const Si = ({noteClick, buttonDisabled}) => {
    return ( <button onClick={() => noteClick("Si")} disabled={buttonDisabled}>Si</button> );
}

export default Si;