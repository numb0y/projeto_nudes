import React from 'react'
import Link from 'next/link';
import "../css/styles.css"

const fundo = new URL("../images/fundo.png",import.meta.url)
const logoprin = new URL("../images/logoprin.png",import.meta.url)
const logo = new URL("../images/logonud.png",import.meta.url)
const contato = new URL("../images/contato.png",import.meta.url)
const footerback = new URL("../images/footerback.png",import.meta.url)
const city = new URL("../images/city.png",import.meta.url)
const pc = new URL("../images/computador.png",import.meta.url)
const db = new URL("../images/db.png",import.meta.url)


function App(){

  return <>

  <header>

    <img src={logoprin} className='logoprin'/>

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

      <img src={logo} className='logo'/>

  </section>

  <section className='mid-container'>

    <h1 className='ldp'>Linhas de Pesquisa</h1>

    <div className='rectan1'>
        <img src={city} className='city'/>
        <h1 className='cityh1'>Temas de convergência:<br></br>
        Cidades inteligentes</h1>
    </div>

    <div className='rectan2'>
        <img src={pc} className='pc'/>
        <h1 className='pch1'>Qualidade e <br></br>produtividade de <br></br>software</h1>
    </div>

    <div className='rectan3'>
        <img src={db} className='db'/>
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
