import React, { useState } from "react";

const Re = ({noteClick}) => {
    const [clickCount, setClickCount] = useState(0);

    return ( <button onClick={() => 
        {
            noteClick("Re");
            setClickCount(clickCount + 1);
        }
    }>Re</button> );
}

export default Re;