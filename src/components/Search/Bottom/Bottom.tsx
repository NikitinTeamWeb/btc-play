import { ReactNode, FC } from 'react';

import Filters from '../Filters/Filters';
import Recent from '../Recent/Recent';
import Recommended from '../Recommended/Recommended';

import classnames from 'classnames';

import styles from './bottom.module.scss';

const Search = () => {
  return (
    <div className={styles.container}>
      <p className={styles.description}>
        Search requires at least 3 characters.
      </p>
      <div className={styles.block}>
        <div className={styles.blockWrapper}>
          <div className={styles.filters}>
            <Filters />
          </div>
          <div className={styles.recent}>
            <Recent />
          </div>
          <div className={styles.recommended}>
            <Recommended />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
