import { useMemo, FC } from 'react';
import cn from 'classnames';
import Link from 'next/link';
import Checkbox from '../Checkbox/Checkbox';

import styles from './login.module.scss';
import Illustration from '../../assets/images/registration/Illustration.png';
import Arrow from '../../assets/images/icons/arrow-button.svg';
interface IProps {
  setIsActiveModal: (val: string) => void;
}

const Registration: FC<IProps> = ({ setIsActiveModal }) => {
  return (
    <>
      <div className={cn('default-input', styles.item)}>
        <label>Email</label>
        <input type="text" placeholder="Registered email address" />
      </div>
      <div className={cn('default-input', styles.item)}>
        <label>Password</label>
        <input type="text" placeholder="Enter Password" />
      </div>
      <p
        className={styles.forgot}
        onClick={() => setIsActiveModal('resetPassword')}
      >
        Forgot your password?
      </p>

      <div className={styles.checkbox}>
        <Checkbox name="TermsConditions">
          I am at least 18 year of age, and accept the{' '}
          <a href="#"> Terms & Conditions</a>
        </Checkbox>
      </div>
      <div className={styles.buttons}>
        <div className={cn('button', styles.button, styles.login)}>Login</div>
        <div
          className={cn(
            'button  button-border__big',
            styles.button,
            styles.registration
          )}
          onClick={() => setIsActiveModal('registration')}
        >
          Registration{' '}
          <span className={cn('icon', styles.icon)}>
            <Arrow />
          </span>
        </div>
      </div>
    </>
  );
};

export default Registration;
