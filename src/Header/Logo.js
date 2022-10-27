import React from "react"
import './Logo.css'


//Este Componente é responsavel por enviar 01 nivel acima a tag Header contendo o Banner do projeto.
const Logo = () => {

  return (
    <header className="logomarca">
      <img src="/imgs/banner.png" alt="Logomarca-Organo" />
    </header>
  )
}

export default Logo;