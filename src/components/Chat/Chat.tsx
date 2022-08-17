import { useState } from 'react';
import cn from 'classnames';
import styles from './chat.module.scss';

import Top from './Top/Top';
import Main from './Main/Main';
import Bottom from './Bottom/Bottom';

import ChatIcon from '../../assets/images/icons/icon_Help.svg';

const Chat = () => {
  const [isNewMessage, setIsNewMessage] = useState(false);
  const [isOpenChat, setIsOpenChat] = useState(false);

  return (
    <div className={styles.content}>
      <div
        className={cn(styles.button, { [styles.new]: isNewMessage })}
        onClick={() => setIsOpenChat(true)}
      >
        <ChatIcon />
      </div>
      <div className={cn(styles.container, { [styles.open]: isOpenChat })}>
        <Top setIsOpenChat={setIsOpenChat} />
        <Main />
        <Bottom />
      </div>
    </div>
  );
};

export default Chat;
