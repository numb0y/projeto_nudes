import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Login.module.css'

import logonud from "../images/logonud.png"
import logoprin from "../images/logoprin.png"
import mainimage from "../images/mainimage.png"

export default function Contato() {
  return (

    <div className={styles.container}>
      <Head>
        <title>NUDES - Login</title>
        <meta name="description" content="Página de Login" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <main className={styles.maincont}>
          
            <main className={styles.lf}>
            <h1 className={styles.lefth1}>Olá, aluno!</h1>
            </main>

        </main>

    </div>
  )
}