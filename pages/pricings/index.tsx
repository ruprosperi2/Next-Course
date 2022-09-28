import Link from "next/link";
import {MainLayout} from "../../components/layouts/MainLayout";
import styles from "../../components/layouts/MainLayout.module.css";

export default function PricingPage() {
    return (
        <MainLayout>
            <h1>Pagina de Pricing</h1>

            <h1 className={'title'}>
                {/*Ir a <a href="/about">About</a>*/}
                Ir a<Link href="/pricing">Pricing</Link>
            </h1>


            <p className={styles.description}>
                Get started by editing{' '}
                <code className={styles.code}>pages/index.js</code>
            </p>
        </MainLayout>    )
}
