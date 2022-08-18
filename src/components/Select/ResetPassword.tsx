import { FC, useState, useEffect } from 'react';
import cn from 'classnames';
import styles from './resetPassword.module.scss';

import BackIcon from '../../assets/images/icons/back.svg';
import MailIcon from '../../assets/images/registration/mail.svg';

interface IProps {
  setIsActiveModal: (val: string) => void;
}

const ResetPassword: FC<IProps> = ({ setIsActiveModal }) => {
  const [isStep, setIsStep] = useState(1);

  useEffect(() => {
    console.log('koko');
  }, []);

  return (
    <>
      <div className={styles.back} onClick={() => setIsActiveModal('login')}>
        <span className={styles.icon}>
          <BackIcon />
        </span>
        Reset password
      </div>
      {isStep == 1 && (
        <>
          <div className={cn('default-input', styles.item)}>
            <label>Email</label>
            <input type="text" placeholder="Registered email address" />
          </div>
          <div
            className={cn('button', styles.button)}
            onClick={() => setIsStep(2)}
          >
            Reset password
          </div>
        </>
      )}
      {isStep == 2 && (
        <div className={styles.mail}>
          <div className={styles.mailIcon}>
            <MailIcon />
          </div>
          <p className={styles.text}>Check yor email</p>
          <p className={styles.description}>
            We have sent a password recover instructions to your email.
          </p>
          <div
            className={cn('button', styles.button)}
            onClick={() => setIsStep(3)}
          >
            Go to mail
          </div>
        </div>
      )}
      {isStep == 3 && (
        <>
          <div className={cn('default-input', styles.item)}>
            <label>New password</label>
            <input type="text" placeholder="Enter new password" />
          </div>
          <div className={cn('button', styles.button)}>Set</div>
        </>
      )}
    </>
  );
};

export default ResetPassword;
