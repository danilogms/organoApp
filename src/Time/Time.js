import React from 'react';
import Colaborador from '../Colaborador/Colaborador';
import './time.css';

//Dump-Component = 'Componente sem inteligência'
//Este componente é responsavel
const Time = (props) => {
  const css = { backgroundColor: props.corSecundaria };

  return (
    //Renderização condicional, caso props.colaboradores.length for > 0 ele vai retornar a section
    props.colaboradores.length > 0 && (
      <section className="time" style={css}>
        <h3 style={{ borderColor: props.corPrimaria }}>{props.nomeTime}</h3>
        <div className="colaboradores">
          {props.colaboradores.map((colaborador) => (
            <Colaborador
              corDeFundo={props.corPrimaria}
              key={colaborador.nome}
              nome={colaborador.nome}
              cargo={colaborador.cargo}
              imagem={colaborador.imagem}
            />
          ))}
        </div>
      </section>
    )
  );
};

export default Time;
