import { ReactNode, FC, useState, useEffect } from 'react';
import Head from 'next/head';
import cn from 'classnames';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Menu from '../Menu/Menu';

import styles from './layout.module.scss';

interface IProps {
  title: string;
  children: ReactNode;
}

const Layout: FC<IProps> = ({ title = 'Страница', children }) => {
  const [isCloseMenu, setIsCloseMenu] = useState(false);

  return (
    <div className={styles['app']}>
      <Head>
        <title>{title}</title>
      </Head>
      <div className={cn(styles.content, { [styles.closeMenu]: isCloseMenu })}>
        <div className={styles.menu}>
          {isCloseMenu}
          <Menu setIsCloseMenu={setIsCloseMenu} isCloseMenu={isCloseMenu} />
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
