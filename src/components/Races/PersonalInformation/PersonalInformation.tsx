import cn from 'classnames';

import styles from './personalInformation.module.scss';

import Avatar from '../../../assets/images/main/avatar.png';
import BTC from '../../../assets/images/footer/BTC-color.png';

const PersonalInformation = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.avatar}>
          <img src={Avatar.src} alt="" />
        </div>
        Nikitin
      </div>

      <div className={styles.position}>
        <p className={styles.description}>My Position</p>
        <p className={styles.text}>50th+</p>
      </div>
      <div className={styles.wagered}>
        <p className={styles.description}>Wagered</p>
        <p className={styles.text}>
          <span className={styles.icon}>
            <img src={BTC.src} alt="" />
          </span>
          0.0000005
        </p>
      </div>
      <div className={styles.reach}>
        <p className={styles.description}>
          Wager to reach <span className={styles.green}>top 10</span>
        </p>
        <p className={styles.text}>
          <span className={styles.icon}>
            <img src={BTC.src} alt="" />
          </span>
          3.15002225
        </p>
      </div>
    </div>
  );
};

export default PersonalInformation;
