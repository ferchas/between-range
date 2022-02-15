

import React from 'react';
import { Header } from '../Header';
import { Footer } from '../Footer';


import styles from './layout.scss';

export const Layout = ({children}) => {

  return (
    <>
      <Header />
        <main className={styles.layoutMain}>
          {children}
        </main>
      <Footer />
    </>
  );
};
