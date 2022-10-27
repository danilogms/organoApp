import React from 'react';
import CampoTexto from '../CampoTexto/CampoTexto';
import SelectLista from '../SelectLista/SelectLista';
import Button from './Button';
import './formulario.css';

//A responsabilidade deste componente é Aglutinar e preencher os seguintes componentes (CampoTexto, SelectLista, Button), enviando um nivel acima um formulário contendo 04 campos a serem preenchidos atraves de métodos e propriedades recebidos dos componentes 'inferiores' e 01 Botão com submit.
const Formulario = (props) => {
  

  const [nome, setNome] = React.useState('');
  const [cargo, setCargo] = React.useState('');
  const [imagem, setImagem] = React.useState('');
  const [time, setTime] = React.useState('');

  //função que irá ser executada quando tivermos submit do formulario
  const onSave = (event) => {
    event.preventDefault();
    props.aoColaboradorCadastrado({
      nome: nome,
      cargo: cargo,
      imagem: imagem,
      time: time,
    });
    setNome('')
    setCargo('')
    setImagem('')
    setTime('')
  };

  return (
    <section className="formulario">
      {/* Submit pois toda vez que tivermos submissao/enviar/botao, iremos renderizar o componente por inteiro novamente */}
      <form onSubmit={onSave}>
        <h1>Preencha os dados para criar o card do colaborador.</h1>
        <CampoTexto
          obrigatorio={true}
          texto="Nome"
          placeholder="Digite seu nome"
          valor={nome}
          aoAlterado={(valor) => setNome(valor)}
        />
        <CampoTexto
          obrigatorio={true}
          texto="Cargo"
          placeholder="Digite seu cargo"
          valor={cargo}
          aoAlterado={(valor) => setCargo(valor)}
        />
        <CampoTexto
          texto="Imagem"
          placeholder="Informe o endereço da imagem"
          valor={imagem}
          aoAlterado={(valor) => setImagem(valor)}
        />
        <SelectLista
          obrigatorio={true}
          texto="Time"
          itens={props.times}
          valor={time}
          aoAlterado={(valor) => setTime(valor)}
          
        />
        <Button>Criar Card</Button>
      </form>
    </section>
  );
};

export default Formulario;
