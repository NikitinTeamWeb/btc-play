import { FC } from 'react';

import Registration from '../Registration/Registration';
import Login from '../Login/Login';

import Illustration from '../../assets/images/registration/Illustration.png';

import styles from './signIn.module.scss';

interface IProps {
  isActiveModal: string;
  setIsActiveModal: (val: string) => void;
}

const SignIn: FC<IProps> = ({ isActiveModal, setIsActiveModal }) => {
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
      </div>
    </div>
  );
};

export default SignIn;
