import List from './List/List';
import Language from './Language/Language';

import styles from './menu.module.scss';

import LogoIcon from '../../assets/images/menu/logo.svg';

const Menu = () => {
  return (
    <div className={styles.menu}>
      <div className={styles.menuWrapper}>
        <div className={styles.logo}>
          <LogoIcon />
        </div>
        <div className={styles.list}>
          <List />
        </div>
        <div className={styles.line}></div>
        <div className={styles.block}>
          <Language />
        </div>
      </div>
    </div>
  );
};

export default Menu;
