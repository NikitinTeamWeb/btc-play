import { useState } from 'react';
import classnames from 'classnames';
import Modal from '../Modal/Modal';

import SignIn from '../SignIn/SignIn';

import styles from './header.module.scss';

import Search from '../Search/Search';
import Chat from '../Chat/Chat';

const Header = () => {
  const [isOpenSignIn, setIsOpenSignIn] = useState(false);
  const [isActiveModal, setIsActiveModal] = useState('');

  const openSignIn = (activeModal: string) => {
    setIsOpenSignIn(true);
    setIsActiveModal(activeModal);
  };
  const closeSignIn = () => {
    setIsOpenSignIn(false);
  };

  return (
    <div className={styles.header}>
      <div className={styles.search}>
        <Search />
      </div>
      <div className={styles.buttons}>
        <div className={styles.login} onClick={() => openSignIn('login')}>
          Login
        </div>
        <div
          className={styles.registration}
          onClick={() => openSignIn('registration')}
        >
          Registration
        </div>
        <div className={styles.chat}>
          <Chat />
        </div>
        <Modal isOpen={isOpenSignIn} onClose={closeSignIn} maxWidth="890px">
          <SignIn
            isActiveModal={isActiveModal}
            setIsActiveModal={setIsActiveModal}
          />
        </Modal>
      </div>
    </div>
  );
};

export default Header;
