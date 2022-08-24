import { useState, useMemo, useEffect } from 'react';

import Sorting from '../../Sorting/Sorting';
import Pagination from '../../Pagination/Pagination';

import styles from './sessions.module.scss';

const Sessions = () => {
  const options = useMemo(
    () => [
      {
        title: `All`,
        value: 'All',
      },
      {
        title: `Active`,
        value: 'Active',
      },
      {
        title: `Inactive`,
        value: 'Inactive',
      },
    ],
    []
  );
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2 className={styles.title}>Session Filter</h2>
        <div className={styles.select}>
          <Sorting options={options} />
        </div>
        {/* <Pagination /> */}
      </div>
    </div>
  );
};

export default Sessions;
