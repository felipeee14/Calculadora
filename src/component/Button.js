import React from "react";
import '../styles/Button.css'; 

function Button (props)  {

    const esOperador = valor=> {
        return isNaN(valor) && (valor !== '.') && (valor !== '=');
    }

    return (
<div className={`button-container ${esOperador(props.children)?'operador': null}`}
    onClick={() => props.manejarClic(props.children)}>
    {props.children}
</div>
    );
}

export default Button;