import * as React from "react";

import Head from 'next/head';

import Props from '../../types/Props';
import { Navbar } from '../navbar/Navbar';
import styles from './MainLayout.module.css';

export const MainLayout : React.FC<Props> = ({children}) => {
    return (
        <div className={styles.container}>
          <Head>
            <title>Home - Cristian</title>
            <meta name="description" content="Home Page" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
    
          <Navbar/>
    
          <main className={styles.main}>
            {children}
          </main>
        </div>
      )
}
