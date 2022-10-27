import React from "react";
import './button.css'


//Este componente é responsavel por enviar 01 nivel acima um Button contendo propriedades a serem preenchidas no nivel superior.
const Button = (props) => {

  return (
    <button className="button">
      {props.children}
    </button>
  )
}

export default Button;