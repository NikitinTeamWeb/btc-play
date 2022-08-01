import Table from '../Table/Table';

import Loading from '../../../assets/images/icons/loading.svg';

import styles from './data.module.scss';

const Data = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.active}>
          <span className={styles.loading}>
            <Loading />
          </span>
          Active
        </div>
        <div className={styles.date}>02.09.2021-03.09.2021</div>
      </div>
      <div className={styles.table}>
        <Table />
      </div>
    </div>
  );
};

export default Data;
