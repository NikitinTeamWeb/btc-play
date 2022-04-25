import { ReactNode, FC } from 'react';

import Filters from '../Filters/Filters';

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
          <Filters />
        </div>
      </div>
    </div>
  );
};

export default Search;
