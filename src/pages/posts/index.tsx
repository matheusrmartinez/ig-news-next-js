import Head from 'next/head';
import React from 'react';
import styles from './styles.module.scss';

export default function Posts(){
  return (
    <>
    <Head>
      <title>Posts | Ignews</title>
    </Head>
    <main className={styles.container}>
      <div className={styles.posts}>
        <a href="#">
          <time>12 de março de 2021</time>
          <strong>Aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</strong>
          <p>Teste aaaaaaaaaaaaaaaaaaaaa</p>
        </a>
        <a href="#">
          <time>13 de março de 2021</time>
          <strong>Aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</strong>
          <p>Teste aaaaaaaaaaaaaaaaaaaaa</p>
        </a>
        <a href="#">
          <time>15 de abril de 2021</time>
          <strong>Aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</strong>
          <p>Teste aaaaaaaaaaaaaaaaaaaaa</p>
        </a>
        <a href="#">
          <time>16 de março de 2021</time>
          <strong>Aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</strong>
          <p>Teste aaaaaaaaaaaaaaaaaaaaa</p>
        </a>
      </div>
    </main>
    </>
  )
}
