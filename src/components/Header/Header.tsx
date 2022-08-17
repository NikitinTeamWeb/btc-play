import { useState } from 'react';
import classnames from 'classnames';

import styles from './header.module.scss';

import Search from '../Search/Search';
import Chat from '../Chat/Chat';

const Header = () => {
  const [isChatHelp, setIsChatHelp] = useState(true);
  return (
    <div className={styles.header}>
      <div className={styles.search}>
        <Search />
      </div>
      <div className={styles.buttons}>
        <div className={styles.login}>Login</div>
        <div className={styles.registration}>Registration</div>
        <div className={styles.chat}>
          <Chat />
        </div>
      </div>
    </div>
  );
};

export default Header;
