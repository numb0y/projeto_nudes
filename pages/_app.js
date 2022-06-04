import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from "../css/styles.css";

import logonud from "../images/logonud.png"
import logoprin from"../images/logoprin.png"
import city from "../images/city.png"
import pc from "../images/computador.png"
import db from "../images/db.png"

const fundo = new URL("../images/fundo.png",import.meta.url)

const contato = new URL("../images/contato.png",import.meta.url)
const footerback = new URL("../images/footerback.png",import.meta.url)



function App(){

  return <>

  <header>

    <div className='logoprin'>
      <Image 
      src={logoprin}
      layout="fixed"
      />
    </div>

          <a href="https://www.youtube.com/" className="nucleo">O NÚCLEO</a>
          <a href="https://www.youtube.com/" className="noticias">NOTICIAS</a>
          <a href="https://www.youtube.com/" className="pesquisadores">PESQUISADORES</a>
          <a href="https://www.youtube.com/" className="linhaspes">LINHAS DE PESQUISA</a>
          <a href="https://www.youtube.com/" className="projetos">PROJETOS</a>

          <form action="./contato.js">
            <button type="submit" className="contato"></button>
        </form>

  </header>

  <section className='main-container'>

      <div className='textop'>

      <h1>NÚCLEO DE DESENVOLVIMENTO DE SOFTWARE DO IFRN</h1>
      
      </div>

      <div className='logo'>
      <Image 
      src={logonud}
      width={250}
      height={250}
      />
      </div>

  </section>

  <section className='mid-container'>

    <h1 className='ldp'>Linhas de Pesquisa</h1>

    <div className='rectan1'>
        <div className='city'>
        <Image 
        src={city}
        width={162.5}
        height={80}
        />
        </div>
        <h1 className='cityh1'>Temas de convergência:<br></br>
        Cidades inteligentes</h1>
    </div>

    <div className='rectan2'>
        <div className='pc'>
          <Image 
          src={pc}
          width={117.58}
          height={92}
          />
        </div>
        <h1 className='pch1'>Qualidade e <br></br>produtividade de <br></br>software</h1>
    </div>

    <div className='rectan3'>
      <div className='db'>
            <Image 
            src={db}
            width={75}
            height={84}
            />
          </div>
        <h1 className='dbh1'>Bancos de Dados, Big Data <br></br>e análise de dados</h1>
    </div>

    <div className='rectan4'>

    </div>

    <div className='rectan5'>

    </div>

    <div className='rectan6'>

    </div>

  </section>

  <section className='mid2-container'>

    <div className='not1'>

    </div>

    <div className='not2'>

    </div>

    <div className='not3'>

    </div>

  </section>

  <footer className='footer'>

  </footer>
  </>

}

export default App
