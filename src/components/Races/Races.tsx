import Competition from './Сompetition/Competition';
import Data from './Data/Data';

import styles from './races.module.scss';

const Races = () => {
  return (
    <div className={styles.content}>
      <div className={styles.competition}>
        <Competition />
      </div>
      <div className={styles.data}>
        <Data />
      </div>
    </div>
  );
};

export default Races;
