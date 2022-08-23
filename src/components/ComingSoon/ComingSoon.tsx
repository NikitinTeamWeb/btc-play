import cn from 'classnames';
import Timer from './Timer/Timer';

import Logo from '../../assets/images/comigSoon/logo.svg';
import El1 from '../../assets/images/comigSoon/BTCplay_1.png';
import El2 from '../../assets/images/comigSoon/BTCplay_2.png';

import styles from './comingSoon.module.scss';

const ComingSoon = () => {
  const timer = 1669204800;

  return (
    <div className={styles.container}>
      <div className={styles.el1}>
        <img src={El1.src} alt="" />
      </div>
      <div className={styles.el2}>
        <img src={El2.src} alt="" />
      </div>
      <div className={styles.content}>
        <div className={styles.logo}>
          <Logo />
        </div>
        <h1 className={styles.title}>
          We’re Getting <span className={styles.yellow}>Ready</span>
        </h1>
        <div className={styles.timer}>
          <Timer timer={timer} />
        </div>
        <p className={styles.text}>
          We will back to something amazing. To get latest updates about our
          site please sign up to our newsletter *
        </p>
        <div className={cn('default-input', styles.input)}>
          <input type="text" placeholder="Your email and get notified" />
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
