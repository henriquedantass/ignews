import Head from 'next/head';
import styles from './styles.module.scss'

export default function Post() {
    return (
        <>
        <Head>
            <title>Ignews | Posts</title>
        </Head>

        <main className={styles.container}>
            <div className={styles.post}>
                <a href='#'>
                    <time>02 de julho de 2021</time>
                    <strong>Um post de next para um cara que está aprendendo</strong>
                    <p>Henrique Dantas um jovem desenvolvedor não sabia de quase nada e ganhou o mundo</p>
                </a>
                <a href='#'>
                    <time>02 de julho de 2021</time>
                    <strong>Um post de next para um cara que está aprendendo</strong>
                    <p>Henrique Dantas um jovem desenvolvedor não sabia de quase nada e ganhou o mundo</p>
                </a>
                <a href='#'>
                    <time>02 de julho de 2021</time>
                    <strong>Um post de next para um cara que está aprendendo</strong>
                    <p>Henrique Dantas um jovem desenvolvedor não sabia de quase nada e ganhou o mundo</p>
                </a>
            </div>
        </main> 
        </>

    )
}