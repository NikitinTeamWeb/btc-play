import styles from './header.module.scss';

import Search from '../Search/Search';

import HelpIcon from '../../assets/images/icons/help.svg';
import SlideImg1 from '../../assets/images/icons/icon_Help.png';

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.search}>
        <Search />
      </div>
      <div className={styles.buttons}>
        <div className={styles.login}>Login</div>
        <div className={styles.registration}>Registration</div>
        <div className={styles.help}>
          <img src={SlideImg1.src} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
