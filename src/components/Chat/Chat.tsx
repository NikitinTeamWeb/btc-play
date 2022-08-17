import { useState } from 'react';
import cn from 'classnames';
import styles from './chat.module.scss';

import Top from './Top/Top';

import ChatIcon from '../../assets/images/icons/icon_Help.svg';

const Chat = () => {
  const [isNewMessage, setIsNewMessage] = useState(false);

  return (
    <div className={styles.content}>
      <div className={cn(styles.button, { [styles.new]: isNewMessage })}>
        <ChatIcon />
      </div>
      <div className={styles.container}>
        <Top />
      </div>
    </div>
  );
};

export default Chat;
