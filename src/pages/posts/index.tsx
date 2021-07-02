import { GetStaticProps } from 'next';
import Head from 'next/head';
import { getPrismicClient } from '../../services/prismic';
import Prismic from '@prismicio/client';

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

export const getStaticProps: GetStaticProps = async () => {
    const prismic = getPrismicClient()
    const response = await prismic.query([  
        Prismic.predicates.at('document.type', 'publication') //Aqui publication
      ], {
        fetch: ['publication.title', 'publication.content'],
        pageSize: 100
      })
      console.log(response)

    return {
        props:{}
    }
}