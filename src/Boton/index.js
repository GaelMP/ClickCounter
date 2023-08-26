import React from "react";
import './Boton.css'

function Boton(props) {
    return(        
        <button 
            className={ props.esBotonDeClick ? "boton-click" : "boton-reiniciar" }
            onClick={props.manejarClick}
        >
            {props.texto}
        </button>
    );
}

export {Boton};