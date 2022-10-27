import React from 'react'
import './titulo.css'


//Este Componente é responsavel por enviar 01 nivel acima uma tag H1 (Titulo) contendo propriedades a serem preenchidas no nivel superior.
function Titulo(props) {
  return (
    <h1 className='titulo'>{props.texto}</h1>
  )
}

export default Titulo