import React from 'react';
import './selectLista.css';


//A responsabilidade deste componente é enviar um nivel acima uma section contendo Label e Lista(select) contendo métodos e propriedades a serem preenchidas no nivel superior.
const SelectLista = (props) => {
  return (
    <section className="campo-texto">
      <label>{props.texto}</label>
      <select
        onChange={(event) => props.aoAlterado(event.target.value)}
        required={props.obrigatorio}
        value={props.valor}
      >
        <option value=""></option>
        {props.itens.map((time) => {
          return <option key={time}>{time}</option>;
        })}
      </select>
    </section>
  );
}

export default SelectLista;
