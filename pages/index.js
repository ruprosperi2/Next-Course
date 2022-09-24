import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from "next/link";
import {NavBar} from "../components/NavBar";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home - App</title>
        <meta name="description" content="Home Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <NavBar/>

        <h1>Pagina de Home</h1>

      <main className={styles.main}>
        <h1 className={styles.title}>
          {/*Ir a <a href="/about">About</a>*/}
            Ir a<Link href="/about">About</Link>
        </h1>


        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>
      </main>
    </div>
  )
}
