import { FC } from 'react';
import cn from 'classnames';
import Link from 'next/link';

import Coins from './Coins/Coins';
import ButtonTop from '../ButtonTop/ButtonTop';
import Information from './Information/Information';
import Links from './Links/Links';
import Contacts from './Contacts/Contacts';

import LogoIcon from '../../assets/images/menu/logo.svg';
import BackgroundEl from '../../assets/images/main/bg-el2.svg';

import styles from './footer.module.scss';

interface IProps {
  isCloseMenu: boolean;
}

const Footer: FC<IProps> = ({ isCloseMenu }) => {
  return (
    <div className={cn(styles.content, { [styles.closeMenu]: isCloseMenu })}>
      <div className={styles.element}>
        <BackgroundEl />
      </div>
      <div className={styles.block}>
        <Link href="/">
          <a className={styles.logo}>
            <LogoIcon />
          </a>
        </Link>
        <div className={styles.top}>
          <div className={styles.information}>
            <Information />
          </div>
          <div className={styles.links}>
            <Links />
          </div>
          <div className={styles.contacts}>
            <Contacts />
          </div>
        </div>
        <div className={styles.bottom}>
          <p className={styles.text}>©2021 BC.GAME ALL RIGHTS RESERVED</p>
          <div className={styles.coins}>
            <Coins />
          </div>
          <div className={styles.buttonTop}>
            <ButtonTop />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
