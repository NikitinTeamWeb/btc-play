import Message from '../Message/Message';
import { messages } from './config';

import styles from './main.module.scss';

const Main = () => {
  return (
    <div className={styles.content}>
      {messages.map((props) => {
        return <Message props={props} />;
      })}
    </div>
  );
};

export default Main;
