import Sorting from '../../Sorting/Sorting';

import styles from './filters.module.scss';

import filterIcon from '../../../assets/images/icons/filter.png';

const Filters = () => {
  return (
    <div className={styles.block}>
      <div className={styles.title}>
        <span className={styles.icon}>
          <img src={filterIcon.src} alt="" />
        </span>
        Filters
      </div>
      <div className={styles.selects}>
        <div className={styles.select}>
          <Sorting title="Game provires" />
        </div>
        <div className={styles.select}>
          <Sorting title="Themes" />
        </div>
        <div className={styles.select}>
          <Sorting title="Features" />
        </div>
      </div>
    </div>
  );
};

export default Filters;
