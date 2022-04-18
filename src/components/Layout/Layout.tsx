import { ReactNode, FC } from 'react';
import Head from 'next/head';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import styles from './layout.module.scss';

interface IProps {
  title: string;
  children: ReactNode;
}

const Layout: FC<IProps> = ({ title = 'Страница', children }) => {
  return (
    <div className={styles['app']}>
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      <div className={styles['app-inner']}>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
