import cn from 'classnames';
import Send from '../Send/Send';

import styles from './bottom.module.scss';

import Icon from '../../../assets/images/chat/icon.svg';
import GIF from '../../../assets/images/chat/GIF.svg';
import Fire from '../../../assets/images/chat/fire.svg';
import Water from '../../../assets/images/chat/water-drop.svg';

const Bottom = () => {
  return (
    <div className={styles.content}>
      <div className={styles.send}>
        <Send />
      </div>
      <div className={styles.bottom}>
        <div className={cn(styles.button, styles.water)}>
          <Water />
        </div>
        <div className={cn(styles.button, styles.symbol)}>
          <Icon />
        </div>
        <div className={cn(styles.button, styles.fire)}>
          <Fire />
        </div>
        <div className={cn(styles.button, styles.gif)}>
          <GIF />
        </div>
      </div>
    </div>
  );
};

export default Bottom;
