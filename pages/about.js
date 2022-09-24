import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from "next/link";
import {NavBar} from "../components/NavBar";

export default function AboutPage() {
    return (
        <div className={styles.container}>
            <Head>
                <title>About - App</title>
                <meta name="description" content="About Page" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <NavBar/>

            <h1>Pagina de About</h1>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    {/*Ir a <a href="/">Home</a>*/}
                    Ir a<Link href="/">Home</Link>
                </h1>


                <p className={styles.description}>
                    Get started by editing{' '}
                    <code className={styles.code}>pages/index.js</code>
                </p>
            </main>
        </div>
    )
}
