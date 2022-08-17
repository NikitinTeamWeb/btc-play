import styles from './send.module.scss';

import AvaIcon from '../../../assets/images/chat/ava.svg';
import SendIcon from '../../../assets/images/chat/Send.svg';

const Send = () => {
  return (
    <div className={styles.block}>
      <div className={styles.ava}>
        <AvaIcon />
      </div>
      <input
        type="text"
        className={styles.input}
        placeholder="Write your message"
      />
      <div className={styles.send}>
        <SendIcon />
      </div>
    </div>
  );
};

export default Send;
