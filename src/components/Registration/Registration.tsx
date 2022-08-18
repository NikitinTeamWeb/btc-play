import { useMemo, useState, FC } from 'react';
import cn from 'classnames';
import Link from 'next/link';
import Checkbox from '../Checkbox/Checkbox';

import styles from './registration.module.scss';
import Illustration from '../../assets/images/registration/Illustration.png';
import Arrow from '../../assets/images/icons/arrow-button.svg';

import ArrowDownIcon from '../../assets/images/icons/icon_dropdown.svg';

interface IProps {
  setIsActiveModal: (val: string) => void;
}

const Registration: FC<IProps> = ({ setIsActiveModal }) => {
  const [isOpenOptional, setIsOpenOptional] = useState(false);

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
      <div className={cn('default-input', styles.item, styles.optional)}>
        <label onClick={() => setIsOpenOptional((prev) => !prev)}>
          Code (Optional)
          <span
            className={cn(styles.arrow, { [styles.rotate]: isOpenOptional })}
          >
            <ArrowDownIcon />
          </span>
        </label>
        {isOpenOptional && (
          <input type="text" placeholder="Enter Code (Optional)" />
        )}
      </div>
      <div className={styles.checkbox}>
        <Checkbox name="TermsConditions">
          I am at least 18 year of age, and accept the{' '}
          <a href="#"> Terms & Conditions</a>
        </Checkbox>
      </div>
      <div className={styles.buttons}>
        <div
          className={cn(
            'button button-border__big',
            styles.button,
            styles.login
          )}
          onClick={() => setIsActiveModal('login')}
        >
          Login{' '}
          <span className={cn('icon', styles.icon)}>
            <Arrow />
          </span>
        </div>
        <div className={cn('button', styles.button, styles.registration)}>
          Registration
        </div>
      </div>
    </>
  );
};

export default Registration;
