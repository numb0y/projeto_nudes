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

<div className={styles.logoprimob}>
        <Image
        alt='Logo Nudes' 
        src={logoprin}
        width={60.5}
        height={20}
        />
</div>

<nav className={styles.nav}>
<ul className={styles.ulheader}>
      <a href="https://www.youtube.com/" className={styles.nucleo}>O NÚCLEO</a>
      <a href="https://www.youtube.com/" className={styles.nucleo}>NOTICIAS</a>
      <a href="https://www.youtube.com/" className={styles.nucleo}>PESQUISADORES</a>
      <a href="https://www.youtube.com/" className={styles.nucleo}>LINHAS DE PESQUISA</a>
      <a href="https://www.youtube.com/" className={styles.nucleo}>PROJETOS</a>

<ul className={styles.ulcontato}>
<form action="./contato">
        <button type="submit" className={styles.contato}></button>
    </form>
</ul>
</ul>
</nav>

</header>

      <main className={styles.main}>
              <main className={styles.maincont}>

      <div className={styles.textomob}>

      <h1>NÚCLEO DE DESENVOLVIMENTO DE <br></br>SOFTWARE DO IFRN</h1>
      
      </div>

    <div className={styles.textandlogo}>
      <div className={styles.textop}>

      <h1>NÚCLEO DE DESENVOLVIMENTO DE <br></br>SOFTWARE DO IFRN</h1>
      
      </div>

      <div className={styles.logo}>
      <Image 
      alt="Símbolo Nudes"
      src={logonud}
      width={250}
      height={250}
      />
      </div>

      <div className={styles.logomob}>
      <Image 
      alt="Símbolo Nudes"
      src={logonud}
      width={125}
      height={125}
      />
      </div>

      </div>

  </main>


    <section className={styles.midcont}>

    <h1 className={styles.ldp}>Linhas de Pesquisa</h1>


    <section className={styles.flex}>

    <div className={styles.rectan}>
      
        <div className={styles.figure}>
        <Image
        alt='Cidades Tecnológicas' 
        src={city}
        width={162.5}
        height={80}
        />
        </div>

        <div className={styles.figmob}>
        <Image
        alt='Cidades Tecnológicas' 
        src={city}
        width={81.25}
        height={40}
        />
        </div>

        <h1 className={styles.figdesc}>Temas de convergência:<br></br>
        Cidades inteligentes</h1>
    </div>

    <div className={styles.rectan}>

        <div className={styles.figure}>
          <Image
          alt='Aparelhos' 
          src={pc}
          width={117.58}
          height={92}
          />
        </div>

        <div className={styles.figmob}>
          <Image
          alt='Aparelhos' 
          src={pc}
          width={58.79}
          height={46}
          />
        </div>

        <h1 className={styles.figdesc}>Qualidade e <br></br>produtividade de <br></br>software</h1>

    </div>

    <div className={styles.rectan}>

      <div className={styles.figure}>
            <Image
            alt='Banco de Dados' 
            src={db}
            width={75}
            height={84}
            />
          </div>

          <div className={styles.figmob}>
            <Image
            alt='Banco de Dados' 
            src={db}
            width={37.5}
            height={42}
            />
          </div>

        <h1 className={styles.figdesc}>Bancos de Dados, Big Data <br></br>e análise de dados</h1>

    </div>

    <div className={styles.rectan}>

          <div className={styles.figure}>
            <Image
            alt='Conexões' 
            src={conex}
            width={109}
            height={85}
            />
          </div>

          <div className={styles.figmob}>
            <Image
            alt='Conexões' 
            src={conex}
            width={54.5}
            height={42.5}
            />
          </div>

          <h1 className={styles.figdesc}>Sistemas Embarcados e<br></br>Móveis</h1>

    </div>

    <div className={styles.rectan}>

          <div className={styles.figure}>
            <Image
            alt='Controle' 
            src={controle}
            width={108}
            height={76}
            />
          </div>
          
          <div className={styles.figmob}>
            <Image
            alt='Controle' 
            src={controle}
            width={54}
            height={38}
            />
          </div>

          <h1 className={styles.figdesc}>Desenvolvimento de<br></br>Jogos Digitais</h1>

    </div>

    <div className={styles.rectan}>

          <div className={styles.figure}>
            <Image
            alt='Usuário' 
            src={pcchar}
            width={96}
            height={89}
            />
          </div>

          <div className={styles.figmob}>
            <Image
            alt='Usuário' 
            src={pcchar}
            width={48}
            height={44.5}
            />
          </div>

          <h1 className={styles.figdesc}>Engenharia de Serviços</h1>

    </div>
    </section>

  </section>



  <section className={styles.mid2cont}>

<section className={styles.flex2}>

<div className={styles.rec2}>

  <div className={styles.seci}>
    <Image
    alt='Secitex'
    src={secitex}
    width={250}
    height={181.88}
    />
  </div>

  <div className={styles.secimob}>
    <Image
    alt='Secitex'
    src={secitex}
    width={125}
    height={90.94}
    />
  </div>
  
  <h1 className={styles.rec2h1}>PROJETOS</h1>

  <form action="https://youtube.com/">
        <button type="submit" className={styles.leiamais}></button>
    </form>
</div>

<div className={styles.rec2}>

  <div className={styles.seci}>
    <Image
    alt='Secitex'
    src={secitex}
    width={250}
    height={181.88}
    />
  </div>

  <div className={styles.secimob}>
    <Image
    alt='Secitex'
    src={secitex}
    width={125}
    height={90.94}
    />
  </div>

  <h1 className={styles.rec2h1}>EVENTOS</h1>

  <form action="https://youtube.com/">
        <button type="submit" className={styles.leiamais}></button>
    </form>
</div>

<div className={styles.rec2}>
  <h1 className={styles.rec2h1}>GAMEDU</h1>
  <h1 className={styles.rec2desc}>Workshop de <br></br>desenvolvimento de <br></br>jogos</h1>
  <form action="https://youtube.com/">
        <button type="submit" className={styles.leiamais}></button>
    </form>
</div>
</section>

</section>
      </main>
      <footer className={styles.footer}>

      </footer>
    </div>
  )
}