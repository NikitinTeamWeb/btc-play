import { ReactNode, FC, useState, useEffect } from 'react';
import Head from 'next/head';
import cn from 'classnames';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Menu from '../Menu/Menu';

import styles from './layout.module.scss';

import BgElement1 from '../../assets/images/main/bg-el1.svg';
import BgElement2 from '../../assets/images/main/bg-el3.svg';

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
        <div className={styles.contentBlock}>
          <div className={styles.element2}>
            <BgElement2 />
          </div>
          <div className={styles.menu}>
            {isCloseMenu}
            <Menu setIsCloseMenu={setIsCloseMenu} isCloseMenu={isCloseMenu} />
          </div>
          <div className={styles.main}>
            <div className={styles.element1}>
              <BgElement1 />
            </div>
            <Header />
            <div className={styles['app-inner']}>{children}</div>
          </div>
        </div>
        <Footer isCloseMenu={isCloseMenu} />
      </div>
    </div>
  );
};

export default Layout;
