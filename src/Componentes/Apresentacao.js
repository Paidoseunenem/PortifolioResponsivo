import React from "react";
import "./Apresentacao.css";
import balao from "../assets/balao2.png";


export default function Apresentacao() {
    
  return (
    
    <div className="Texto">
      <img src={balao} className='balao' />
      <div className="Apresentacao">
        <h2>
          Olá, Meu Nome é João Vitor de Vasconcelos. Mas Pode Me Chamar de
          JOTAJOTA
        </h2>    
        <h2>
          Sou Analista de Sistema Em Desenvolvimento. Conheça um Pouco Mais
          Sobre a Minha Jornada Até Aqui #AMEOVERDE
        </h2>
      </div>

    </div>
  );
}
