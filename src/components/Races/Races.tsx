import Competition from './Сompetition/Competition';

import styles from './races.module.scss';

const Races = () => {
  return (
    <div className={styles.content}>
      <div className={styles.competition}>
        <Competition />
      </div>
    </div>
  );
};

export default Races;
