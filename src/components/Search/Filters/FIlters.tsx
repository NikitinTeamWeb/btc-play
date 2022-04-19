import styles from './filters.module.scss';

import filterIcon from '../../../assets/images/icons/filter.png';

const List = () => {
  return (
    <div className={styles.block}>
      <div className={styles.title}>
        <span className={styles.icon}>
          <img src={filterIcon.src} alt="" />
        </span>
        Filters
      </div>
    </div>
  );
};

export default List;
