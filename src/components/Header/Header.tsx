import { useState } from 'react';
import classnames from 'classnames';

import styles from './header.module.scss';

import Search from '../Search/Search';

import HelpIcon from '../../assets/images/icons/icon_Help.svg';

const Header = () => {
  const [isNewHelp, setIsNewHelp] = useState(true);
  return (
    <div className={styles.header}>
      <div className={styles.search}>
        <Search />
      </div>
      <div className={styles.buttons}>
        <div className={styles.login}>Login</div>
        <div className={styles.registration}>Registration</div>
        <div
          className={classnames(styles.help, { [styles.helpNew]: isNewHelp })}
        >
          <HelpIcon />
        </div>
      </div>
    </div>
  );
};

export default Header;
