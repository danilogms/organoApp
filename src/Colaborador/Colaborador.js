import React from "react";
import './colaborador.css'

const Colaborador = (props) => {
  const corFundo = props.corDeFundo
  return(
  <div className="colaborador">
    <div style={{backgroundColor: corFundo}} className="cabecalho" >
      <img src={props.imagem} alt={props.alt} />
    </div>
    <div className="rodape">
      <h4>{props.nome}</h4>
      <h5>{props.cargo}</h5>
    </div>
  </div>
  )
 
}

export default Colaborador