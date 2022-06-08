import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import logonud from "../images/logonud.png"
import logoprin from"../images/logoprin.png"
import city from "../images/city.png"
import pc from "../images/computador.png"
import db from "../images/db.png"
import conex from "../images/conexa.png"
import pcchar from "../images/pccharacter.png"
import controle from "../images/controle.png"
import secitex from "../images/secitex.png"

export default function Home() {
  return (

    <div className={styles.container}>
      <Head>
        <title>NUDES</title>
        <meta name="description" content="Página home" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
 <header className={styles.header}>

    <div className={styles.logopri}>
            <Image
            alt='Logo Nudes' 
            src={logoprin}
            width={121}
            height={40}
            />
    </div>

          <a href="https://www.youtube.com/" className={styles.nucleo}>O NÚCLEO</a>
          <a href="https://www.youtube.com/" className={styles.noticias}>NOTICIAS</a>
          <a href="https://www.youtube.com/" className={styles.pesquisadores}>PESQUISADORES</a>
          <a href="https://www.youtube.com/" className={styles.linhaspes}>LINHAS DE PESQUISA</a>
          <a href="https://www.youtube.com/" className={styles.projetos}>PROJETOS</a>

          <form action="./contato/">
            <button type="submit" className={styles.contato}></button>
        </form>

  </header>

      <main className={styles.main}>
    <main className={styles.maincont}>

      <div className={styles.textop}>

      <h1>NÚCLEO DE DESENVOLVIMENTO DE SOFTWARE DO IFRN</h1>
      
      </div>

      <div className={styles.logo}>
      <Image 
      alt="Símbolo Nudes"
      src={logonud}
      width={250}
      height={250}
      />
      </div>

  </main>

  <section className={styles.midcont}>

    <h1 className={styles.ldp}>Linhas de Pesquisa</h1>

    <div className={styles.rectan1}>
        <div className={styles.city}>
        <Image
        alt='Cidades Tecnológicas' 
        src={city}
        width={162.5}
        height={80}
        />
        </div>
        <h1 className={styles.cityh1}>Temas de convergência:<br></br>
        Cidades inteligentes</h1>
    </div>

    <div className={styles.rectan2}>
        <div className={styles.pc}>
          <Image
          alt='Aparelhos' 
          src={pc}
          width={117.58}
          height={92}
          />
        </div>
        <h1 className={styles.pch1}>Qualidade e <br></br>produtividade de <br></br>software</h1>
    </div>

    <div className={styles.rectan3}>
      <div className={styles.db}>
            <Image
            alt='Banco de Dados' 
            src={db}
            width={75}
            height={84}
            />
          </div>
        <h1 className={styles.dbh1}>Bancos de Dados, Big Data <br></br>e análise de dados</h1>
    </div>

    <div className={styles.rectan4}>
          <div className={styles.conex}>
            <Image
            alt='Conexões' 
            src={conex}
            width={109}
            height={85}
            />
          </div>
          <h1 className={styles.conexh1}>Sistemas Embarcados e<br></br>Móveis</h1>
    </div>

    <div className={styles.rectan5}>
          <div className={styles.controle}>
            <Image
            alt='Controle' 
            src={controle}
            width={108}
            height={76}
            />
          </div>
          <h1 className={styles.conexh1}>Desenvolvimento de<br></br>Jogos Digitais</h1>
    </div>

    <div className={styles.rectan6}>
          <div className={styles.pcchar}>
            <Image
            alt='Usuário' 
            src={pcchar}
            width={96}
            height={89}
            />
          </div>
          <h1 className={styles.conexh1}>Engenharia de Serviços</h1>
    </div>

  </section>

  <section className={styles.mid2cont}>

    <div className={styles.not1}>
      <div className={styles.seci}>
        <Image
        alt='Secitex'
        src={secitex}
        width={250}
        height={181.88}
        />
      </div>
      <h1 className={styles.not2h1}>PROJETOS</h1>

      <form action="https://youtube.com/">
            <button type="submit" className={styles.leiamais}></button>
        </form>
    </div>

    <div className={styles.not2}>
      <div className={styles.seci}>
        <Image
        alt='Secitex'
        src={secitex}
        width={250}
        height={181.88}
        />
      </div>
      <h1 className={styles.not1h1}>EVENTOS</h1>

      <form action="https://youtube.com/">
            <button type="submit" className={styles.leiamais}></button>
        </form>
    </div>

    <div className={styles.not3}>
      <h1 className={styles.gamedu}>GAMEDU</h1>
      <h1 className={styles.h1game}>Workshop de <br></br>desenvolvimento de <br></br>jogos</h1>
      <form action="https://youtube.com/">
            <button type="submit" className={styles.leiamais}></button>
        </form>
    </div>

  </section>
      </main>

      <footer className={styles.footer}>

      </footer>
    </div>
  )
}