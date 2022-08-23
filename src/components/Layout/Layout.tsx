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
  noFooter?: boolean;
}

const Layout: FC<IProps> = ({ title = 'Страница', children, noFooter }) => {
  const [isCloseMenu, setIsCloseMenu] = useState(false);
  const [isOpenSearchBlock, setIsOpenSearchBlock] = useState(false);

  return (
    <div className={styles['app']}>
      <Head>
        <title>{title}</title>
      </Head>
      <div
        className={cn(
          styles.content,
          { [styles.closeMenu]: isCloseMenu },
          { [styles.searchResult]: isOpenSearchBlock }
        )}
      >
        <div className={styles.container}>
          <div className={styles.element2}>
            <BgElement2 />
          </div>
          <div className={styles.menu}>
            {isCloseMenu}
            <Menu setIsCloseMenu={setIsCloseMenu} isCloseMenu={isCloseMenu} />
          </div>
          <div className={styles.main}>
            <div className={styles.mainBlock}>
              <div className={styles.element1}>
                <BgElement1 />
              </div>
              <Header setIsOpenSearchBlock={setIsOpenSearchBlock} />
              <div className={styles['app-inner']}>{children}</div>
            </div>
            {!noFooter && <Footer isCloseMenu={isCloseMenu} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
