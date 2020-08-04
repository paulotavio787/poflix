import React from 'react';
import { FooterBase } from './styles';
import logo2 from "../../assets/img/logo2.png"

function Footer() {
  return (
    <FooterBase>
      <a href="https://www.alura.com.br/">
        <img src={logo2} alt="Logo POFLIX" />
      </a>
      <p>
        Orgulhosamente criado durante a
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>
      </p>
      <p>Eu disse que foi eu que fiz o site Michele</p>
    </FooterBase>
  );
}

export default Footer;
