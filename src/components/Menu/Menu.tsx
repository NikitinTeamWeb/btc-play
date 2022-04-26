import List from './List/List';

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
      </div>
    </div>
  );
};

export default Menu;
