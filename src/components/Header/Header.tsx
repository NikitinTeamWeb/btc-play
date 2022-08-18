import { useState } from 'react';
import classnames from 'classnames';
import Modal from '../Modal/Modal';
import Registration from '../Registration/Registration';

import styles from './header.module.scss';

import Search from '../Search/Search';
import Chat from '../Chat/Chat';

const Header = () => {
  const [isChatHelp, setIsChatHelp] = useState(true);

  const [isOpenCreateBet, setIsCreateBet] = useState(false);

  const openCreateBet = () => {
    setIsCreateBet(true);
  };

  const closeCreateBet = () => {
    setIsCreateBet(false);
  };

  return (
    <div className={styles.header}>
      <div className={styles.search}>
        <Search />
      </div>
      <div className={styles.buttons}>
        <div className={styles.login}>Login</div>
        <div className={styles.registration} onClick={openCreateBet}>
          Registration
        </div>
        <div className={styles.chat}>
          <Chat />
        </div>
        <Modal
          isOpen={isOpenCreateBet}
          onClose={closeCreateBet}
          maxWidth="890px"
        >
          <Registration />
        </Modal>
      </div>
    </div>
  );
};

export default Header;
