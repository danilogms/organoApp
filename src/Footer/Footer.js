import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="links">
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/danilogms/">
          <img src="/imgs/gh2-icon.png" alt="Github - Danilo Gomes"/>
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/danilogms10/">
          <img src="/imgs/link.png" alt="" />
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/dnl.20/">
          <img src="imgs/ig.png" alt="" />
        </a>
      </div>
      <div className="logomarca">
        <img src="/imgs/logo.png" alt="" />
      </div>
      <div className="texto-footer">
        <p>Desenvolvido por Danilo Gomes</p>
      </div>
    </footer>
  );
};

export default Footer;
