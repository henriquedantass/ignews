import Head from 'next/head';
import React from 'react';
import styles from './home.module.scss';
import {SubscribeButton} from '../components/SubscribeButton'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | IgNews</title>
      </Head>
      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👏 Hey, welcome</span>
          <h1>News about the <span>React</span> world</h1>
          <p>
            Get acess to all the publications <br/>
            <span>For $9,90 month</span>
          </p>
          <SubscribeButton/>
        </section>

        <img src='/images/avatar.svg' alt='girl codding'></img>

      </main>
    </>
  )
}