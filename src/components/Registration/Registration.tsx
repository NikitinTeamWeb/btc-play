import { useMemo, useState } from 'react';
import cn from 'classnames';
import Link from 'next/link';
import Checkbox from '../Checkbox/Checkbox';

import styles from './registration.module.scss';
import Illustration from '../../assets/images/registration/Illustration.png';
import Arrow from '../../assets/images/icons/arrow-button.svg';

import Discord from '../../assets/images/registration/discord.svg';
import Facebook from '../../assets/images/registration/facebook.svg';
import Telegram from '../../assets/images/registration/telegram.svg';
import Twitter from '../../assets/images/registration/twitter.svg';
import Google from '../../assets/images/registration/google.svg';
import ArrowDownIcon from '../../assets/images/icons/icon_dropdown.svg';

const Registration = () => {
  const [isOpenOptional, setIsOpenOptional] = useState(false);

  const socialsList = useMemo(
    () => [
      {
        id: 0,
        url: '/',
        icon: <Google />,
      },
      {
        id: 1,
        url: '/',
        icon: <Facebook />,
      },
      {
        id: 2,
        url: '/',
        icon: <Telegram />,
      },
      {
        id: 3,
        url: '/',
        icon: <Twitter />,
      },
      {
        id: 4,
        url: '/',
        icon: <Discord />,
      },
    ],
    []
  );

  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <img src={Illustration.src} alt="" />
      </div>
      <div className={styles.content}>
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
        <div className={styles.socials}>
          <p>Or continue with:</p>
          <div className={styles.links}>
            {socialsList.map(({ id, icon, url }) => {
              return (
                <Link href={url} key={id}>
                  <a className={styles.link}>{icon}</a>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
