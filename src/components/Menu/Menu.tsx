import List from './List/List';
import Language from './Language/Language';

import styles from './menu.module.scss';

import LogoImg from '../../assets/images/menu/logo.png';

const Menu = () => {
  return (
    <div className={styles.menu}>
      <div className={styles.menuWrapper}>
        <div className={styles.logo}>
          <img src={LogoImg.src} alt="" />
        </div>
        <div className={styles.list}>
          <List />
        </div>
        <div className={styles.line}></div>
        <div className={styles.language}>
          <Language />
        </div>
      </div>
    </div>
  );
};

export default Menu;
