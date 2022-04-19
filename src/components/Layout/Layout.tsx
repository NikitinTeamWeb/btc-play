import { ReactNode, FC } from 'react';
import Head from 'next/head';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Menu from '../Menu/Menu';

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
      <div className={styles.content}>
        <div className={styles.menu}>
          <Menu />
        </div>
        <div className={styles.main}>
          <Header />
          <div className={styles['app-inner']}>{children}</div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Layout;
