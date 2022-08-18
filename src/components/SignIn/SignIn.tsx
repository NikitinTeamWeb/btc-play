import { FC, useMemo, useState } from 'react';
import Link from 'next/link';

import Registration from '../Registration/Registration';
import Login from '../Login/Login';
import ResetPassword from '../Select/ResetPassword';

import Illustration from '../../assets/images/registration/Illustration.png';
import Discord from '../../assets/images/registration/discord.svg';
import Facebook from '../../assets/images/registration/facebook.svg';
import Telegram from '../../assets/images/registration/telegram.svg';
import Twitter from '../../assets/images/registration/twitter.svg';
import Google from '../../assets/images/registration/google.svg';

import styles from './signIn.module.scss';

interface IProps {
  isActiveModal: string;
  setIsActiveModal: (val: string) => void;
}

const SignIn: FC<IProps> = ({ isActiveModal, setIsActiveModal }) => {
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
        {isActiveModal == 'login' && (
          <Login setIsActiveModal={setIsActiveModal} />
        )}
        {isActiveModal == 'registration' && (
          <Registration setIsActiveModal={setIsActiveModal} />
        )}
        {isActiveModal == 'resetPassword' && (
          <ResetPassword setIsActiveModal={setIsActiveModal} />
        )}
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

export default SignIn;
