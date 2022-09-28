import Link from "next/link";
import {MainLayout} from "../components/layouts/MainLayout";
import {DarkLayout} from "../components/layouts/DarkLayout";
import {JSXElement} from "@typescript-eslint/types/dist/generated/ast-spec";

export default function AboutPage() {
    return (
        <>
            <h1>Pagina de About</h1>

            <h1 className={'title'}>
                {/*Ir a <a href="/about">About</a>*/}
                Ir a<Link href="/about">About</Link>
            </h1>


            <p className={'description'}>
                Get started by editing{' '}
                <code className={'code'}>pages/index.js</code>
            </p>
        </>
    )
}

AboutPage.getLayout = function getLayout( page: JSX.Element ) {
    return (
        <MainLayout>
            <DarkLayout>
                {
                    page
                }
            </DarkLayout>
        </MainLayout>
    )
}
