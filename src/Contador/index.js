import React from "react";
import './Contador.css'

function Contador (props) {
    return(
        <div className="contador">
            {props.numClicks}
        </div>
    )
}

export {Contador}