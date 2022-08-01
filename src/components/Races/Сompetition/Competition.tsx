import Timer from '../../Timer/Timer';
import PersonalInformation from '../PersonalInformation/PersonalInformation';

import Image from '../../../assets/images/main/competition-image.png';
import BTC from '../../../assets/images/footer/BTC-color.png';
import styles from './competition.module.scss';

const Competition = () => {
  const timer = 1659422736;

  return (
    <div className={styles.content}>
      <div className={styles.top}>
        <div className={styles.image}>
          <img src={Image.src} alt="" />
        </div>
        <div className={styles.price}>
          <p className={styles.description}>Contest prize pool</p>
          <h3 className={styles.priceInfo}>
            <span className={styles.icon}>
              <img src={BTC.src} alt="" />
            </span>
            <span className={styles.yellow}>0.00134534</span> BTC
          </h3>
          <p className={styles.daily}>Daily</p>
        </div>
        <div className={styles.time}>
          <p className={styles.description}>Time Remaining</p>
          <Timer timer={timer} />
        </div>
      </div>

      <div className={styles.bottom}>
        <PersonalInformation />
      </div>
    </div>
  );
};

export default Competition;
