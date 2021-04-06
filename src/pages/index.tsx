import { GetServerSideProps } from 'next';
import Head from 'next/head';
import React from 'react';
import styles from './home.module.scss';
import {SubscribeButton} from '../components/SubscribeButton'
import { stripe } from '../services/stripe';

interface HomeProps {
  product: {
    productId: string,
    amount: number,
  }
}

export default function Home({product}: HomeProps) {
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
            <span>For {product.amount} month</span>
          </p>
          <SubscribeButton priceId= {product.productId}/>
        </section>

        <img src='/images/avatar.svg' alt='girl codding'></img>

      </main>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async() => {

  const price = await stripe.prices.retrieve('price_1Id2TqJX1M1I1YITm8RUbxK6', {
    expand: ['product']
  })

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price.unit_amount / 100),


  };

  return {
     props: {
       product,
     }
  }
}