import React, {FC} from 'react';
import styles from "./MainLayout.module.css";
import Head from "next/head";
import {NavBar} from "../NavBar";

type Props = {
    children: React.ReactNode
}

export const MainLayout: FC<Props> = ({children}) => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Home - App</title>
                <meta name="description" content="Home Page" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <NavBar/>

            <main className={styles.main}>
                {children}
            </main>
        </div>
    )
};