import "./App.css";
import perfil from "./assets/perfil.png";
import logo from "./assets/eu.gif";
import chuva from "./assets/adoro.png";
import cu from "./Componentes/curriculo.pdf";
import { Dialog } from "primereact/dialog";
import aoba from "./assets/poha.mp3";
import React from 'react'
import ReactPlayer from 'react-player';
import ReactAudioPlayer from 'react-audio-player';

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaBong } from "react-icons/fa";

import Apresentacao from "./Componentes/Apresentacao";
import { useState } from "react";
import { useEffect } from "react";

function App() {

  const [dialogo, setDialogo] = useState(false)

  function mostraDialogo() {
    setDialogo(!dialogo)
  }


  const click = () => { };
  return (

    <div className="App">
      <ReactAudioPlayer
        src={aoba}
        autoPlay
        controls
      />





      <div className="chuvaboa">
        <div className="chuvaverde-1">
          <div className="ef1">
            <img src={chuva} alt="" className="Adoro" />
            <img src={chuva} alt="" className="Adoro2" />
          </div>
          <div className="ef1">
            <img src={chuva} alt="" className="Adoro" />
            <img src={chuva} alt="" className="Adoro2" />
          </div>
          <div className="ef1">
            <img src={chuva} alt="" className="Adoro" />
            <img src={chuva} alt="" className="Adoro2" />
          </div>
          <div className="ef1">
            <img src={chuva} alt="" className="Adoro" />
            <img src={chuva} alt="" className="Adoro2" />
          </div>
          <div className="ef1">
            <img src={chuva} alt="" className="Adoro" />
            <img src={chuva} alt="" className="Adoro2" />
          </div>
          <div className="ef1">
            <img src={chuva} alt="" className="Adoro" />
            <img src={chuva} alt="" className="Adoro2" />
          </div>
          <div className="ef1">
            <img src={chuva} alt="" className="Adoro" />
            <img src={chuva} alt="" className="Adoro2" />
          </div>
          <div className="ef1">
            <img src={chuva} alt="" className="Adoro" />
            <img src={chuva} alt="" className="Adoro2" />
          </div>
        </div>
        <div className="chuvaverde0">
          <div className="ef1">
            <img src={chuva} alt="" className="Adoro" />
            <img src={chuva} alt="" className="Adoro2" />
          </div>
          <div className="ef1">
            <img src={chuva} alt="" className="Adoro" />
            <img src={chuva} alt="" className="Adoro2" />
          </div>
          <div className="ef1">
            <img src={chuva} alt="" className="Adoro" />
            <img src={chuva} alt="" className="Adoro2" />
          </div>
          <div className="ef1">
            <img src={chuva} alt="" className="Adoro" />
            <img src={chuva} alt="" className="Adoro2" />
          </div>
          <div className="ef1">
            <img src={chuva} alt="" className="Adoro" />
            <img src={chuva} alt="" className="Adoro2" />
          </div>
          <div className="ef1">
            <img src={chuva} alt="" className="Adoro" />
            <img src={chuva} alt="" className="Adoro2" />
          </div>
          <div className="ef1">
            <img src={chuva} alt="" className="Adoro" />
            <img src={chuva} alt="" className="Adoro2" />
          </div>
          <div className="ef1">
            <img src={chuva} alt="" className="Adoro" />
            <img src={chuva} alt="" className="Adoro2" />
          </div>
          <div className="ef1">
            <img src={chuva} alt="" className="Adoro" />
            <img src={chuva} alt="" className="Adoro2" />
          </div>
        </div>
        <div className="chuvaverde1">
          <div className="ef1">
            <img src={chuva} alt="" className="Adoro" />
            <img src={chuva} alt="" className="Adoro2" />
          </div>
          <div className="ef1">
            <img src={chuva} alt="" className="Adoro" />
            <img src={chuva} alt="" className="Adoro2" />
          </div>
          <div className="ef1">
            <img src={chuva} alt="" className="Adoro" />
            <img src={chuva} alt="" className="Adoro2" />
          </div>
          <div className="ef1">
            <img src={chuva} alt="" className="Adoro" />
            <img src={chuva} alt="" className="Adoro2" />
          </div>
          <div className="ef1">
            <img src={chuva} alt="" className="Adoro" />
            <img src={chuva} alt="" className="Adoro2" />
          </div>
          <div className="ef1">
            <img src={chuva} alt="" className="Adoro" />
            <img src={chuva} alt="" className="Adoro2" />
          </div>
          <div className="ef1">
            <img src={chuva} alt="" className="Adoro" />
            <img src={chuva} alt="" className="Adoro2" />
          </div>
          <div className="ef1">
            <img src={chuva} alt="" className="Adoro" />
            <img src={chuva} alt="" className="Adoro2" />
          </div>
          <div className="ef1">
            <img src={chuva} alt="" className="Adoro" />
            <img src={chuva} alt="" className="Adoro2" />
          </div>
          <div className="ef1">
            <img src={chuva} alt="" className="Adoro" />
            <img src={chuva} alt="" className="Adoro2" />
          </div>
        </div>
        <div className="chuvaverde2">
          <div className="ef1">
            <img src={chuva} alt="" className="Adoro" />
            <img src={chuva} alt="" className="Adoro2" />
          </div>
          <div className="ef1">
            <img src={chuva} alt="" className="Adoro" />
            <img src={chuva} alt="" className="Adoro2" />
          </div>
          <div className="ef1">
            <img src={chuva} alt="" className="Adoro" />
            <img src={chuva} alt="" className="Adoro2" />
          </div>
          <div className="ef1">
            <img src={chuva} alt="" className="Adoro" />
            <img src={chuva} alt="" className="Adoro2" />
          </div>
          <div className="ef1">
            <img src={chuva} alt="" className="Adoro" />
            <img src={chuva} alt="" className="Adoro2" />
          </div>
          <div className="ef1">
            <img src={chuva} alt="" className="Adoro" />
            <img src={chuva} alt="" className="Adoro2" />
          </div>
          <div className="ef1">
            <img src={chuva} alt="" className="Adoro" />
            <img src={chuva} alt="" className="Adoro2" />
          </div>
          <div className="ef1">
            <img src={chuva} alt="" className="Adoro" />
            <img src={chuva} alt="" className="Adoro2" />
          </div>
        </div>
      </div>

      <header className="NaveBar">
        <img src={logo} alt="Logo da minha vida" className="Panda" />
        <h1>Dr. JOTAJOTA</h1>
      </header>

      <div className="DivPerfil">
        <img src={perfil} alt="imagem perfil" className="Perfil" />

        <div className="Git" onClick={click}>
          <a
            href="https://github.com/Paidoseunenem"
            rel="noreferrer noopener"
            target="_blank"
          >

            <FaGithub size={80} />
          </a>
        </div>

        <div className="Linke">
          <a
            href="https://www.linkedin.com/in/joão-vitor-de-vasconcelos-6b8b8a174"
            rel="noreferrer noopener"
            target="_blank"
          >
            <FaLinkedin size={80} />
          </a>
        </div>

        <div className="Bong">
          <FaBong size={80} onClick={mostraDialogo} style={{ cursor: 'pointer' }} />
          <Dialog
            visible={dialogo}
            onHide={mostraDialogo}
            style={{ width: "80vw", height: '70vh' }}
          >
            <embed style={{ height: '100%', width: '100%' }} src={cu} ></embed>
          </Dialog>
        </div>
        <div className="Balão"></div>
      </div>
      <Apresentacao />
    </div>
  );
}

export default App;
