import Coins from './Coins/Coins';

import ButtonTop from '../ButtonTop/ButtonTop';
import Information from './Information/Information';

import styles from './footer.module.scss';

const Footer = () => {
  return (
    <div className={styles.content}>
      <div className={styles.top}>
        <div className={styles.information}>
          <Information />
        </div>
      </div>
      <div className={styles.bottom}>
        <p className={styles.text}>©2021 BC.GAME ALL RIGHTS RESERVED</p>
        <div className={styles.coins}>
          <Coins />
        </div>
        <div className={styles.buttonTop}>
          <ButtonTop />
        </div>
      </div>
    </div>
  );
};

export default Footer;
