import { GetStaticProps } from 'next';
import Head from 'next/head';
import { getPrismicClient } from '../../services/prismic';
import Link from 'next/link';
import Prismic from '@prismicio/client';
import {RichText} from 'prismic-dom';
import styles from './styles.module.scss'


interface Post {
    slug: string;
    title: string;
    excerpt: string;
    updatedAt: string;
}

interface PostsProps {
    posts: Post[];

}

export default function Post({posts}:PostsProps) {
    return (
        <>
        <Head>
            <title>Ignews | Posts</title>
        </Head>
        <main className={styles.container}>
            <div className={styles.post}>
                {posts.map(post => (
                    <Link href={`/posts/${post.slug}`}>
                      <a  key={post.slug}>
                        <time>{post.updatedAt}</time>
                        <strong>{post.title}</strong>
                        <p>{post.excerpt}</p>
                       </a>
                    </Link>
                ))}
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

      const posts = response.results.map(post => {
          return {
              slug: post.uid,
              title: RichText.asText(post.data.title),
              excerpt: post.data.content.find(content => content.type === 'paragraph')?. text ?? '',
              updatedAt: new Date(post.last_publication_date).toLocaleDateString('pt-BR' , {
                  day: '2-digit',
                  month: '2-digit',
                  year: 'numeric',
              })
          }
      })

    return {
        props:{
            posts
        }
    }
}