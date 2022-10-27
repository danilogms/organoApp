import React from 'react';
import './CampoTexto.css';


//A responsabilidade deste componente é  de enviar um nivel acima uma section contendo Input e Label contendo propriedades e métodos a serem preenchidos no nivel superior
const CampoTexto = (props) => {
  const aoDigitado = (event) => {
    props.aoAlterado(event.target.value); //Metodo que retorna o que foi digitado
  };

  return (
    <section className="campo-texto">
      <label htmlFor="">{props.texto}</label>
      <input
        placeholder={props.placeholder}
        required={props.obrigatorio}
        type={props.type}
        value={props.valor}
        onChange={aoDigitado}
      />
    </section>
  );
};

export default CampoTexto;
