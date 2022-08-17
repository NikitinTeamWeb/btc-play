import { FC, useEffect } from 'react';

import List from './List/List';
import Language from './Language/Language';
import Theme from './Theme/Theme';
import Support from './Support/Support';
import Socials from './Socials/Socials';

import cn from 'classnames';

import styles from './menu.module.scss';

import LogoIcon from '../../assets/images/menu/logo.svg';
import LogoSmIcon from '../../assets/images/menu/logo-sm.svg';

interface IProps {
  setIsCloseMenu: (val: boolean) => void;
  isCloseMenu: boolean;
}

const Menu: FC<IProps> = ({ setIsCloseMenu, isCloseMenu }) => {
  return (
    <>
      <div
        className={styles.button}
        // @ts-ignore: Unreachable code error
        onClick={() => setIsCloseMenu((prev) => !prev)}
      >
        <span className={cn(styles.buttonLine, styles.buttonLine1)}></span>
        <span className={cn(styles.buttonLine, styles.buttonLine2)}></span>
        <span className={cn(styles.buttonLine, styles.buttonLine3)}></span>
      </div>
      <div className={cn(styles.menu, { [styles.closeMenu]: isCloseMenu })}>
        <div className={styles.menuWrapper}>
          <div className={styles.logo}>
            {isCloseMenu ? <LogoSmIcon /> : <LogoIcon />}
          </div>
          <div className={styles.list}>
            <List isCloseMenu={isCloseMenu} />
          </div>
          <div className={styles.line}></div>
          <div className={styles.block}>
            <Language isCloseMenu={isCloseMenu} />
            <Theme isCloseMenu={isCloseMenu} />
          </div>
          <div className={styles.line}></div>
          <div className={styles.block}>
            <Support isCloseMenu={isCloseMenu} />
            <Socials isCloseMenu={isCloseMenu} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
