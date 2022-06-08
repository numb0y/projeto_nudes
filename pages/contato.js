import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Contato.module.css'

import logonud from "../images/logonud.png"
import logoprin from "../images/logoprin.png"
import mainimage from "../images/mainimage.png"

export default function Contato() {
  return (

    <div className={styles.container}>
      <Head>
        <title>NUDES - Contato</title>
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

          <form action="./contato.js">
            <button type="submit" className={styles.contato}></button>
        </form>

  </header>
    <main className={styles.main}>
        <main className={styles.maincont}>
            <h1 className={styles.contate}>Contate-nos</h1>
        <div className={styles.mainimage}>
            <Image 
            alt="Contato"
            src={mainimage}
            width={465}
            height={337.92}
            />
      </div>

      <form className={styles.mainbox}>
          
      </form>
        </main>
    </main>

    </div>
  )
}