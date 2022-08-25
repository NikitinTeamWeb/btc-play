import { useState, FC } from 'react';
import cn from 'classnames';
import CallIcon from '../../../assets/images/globalSettings/call-calling.svg';
import Key from '../../../assets/images/globalSettings/key.svg';

import styles from './message.module.scss';

interface IProps {
  isStatus: string;
}

const Message: FC<IProps> = ({ isStatus }) => {
  return (
    <div
      className={cn(styles.container, {
        [styles.disabled]: isStatus == 'twoFactorDisabled',
      })}
    >
      <div className={styles.top}>
        <div className={styles.icon}>
          {isStatus == 'updateNumber' && <CallIcon />}
          {isStatus == 'twoFactorEnabled' && <Key />}
          {isStatus == 'twoFactorDisabled' && <Key />}
        </div>
        <div className={styles.info}>
          {isStatus == 'updateNumber' && (
            <>
              <h3 className={styles.title}>Phone number update</h3>
              <p className={styles.text}>
                Confirmation message sent to +1125252523
              </p>
            </>
          )}
          {isStatus == 'twoFactorEnabled' && (
            <h3 className={styles.title}>Two Factor Enabled</h3>
          )}
          {isStatus == 'twoFactorDisabled' && (
            <h3 className={styles.title}>Two Factor Disabled</h3>
          )}
        </div>
      </div>
      <div className={styles.progress}>
        <div className={styles.result}></div>
      </div>
    </div>
  );
};

export default Message;
