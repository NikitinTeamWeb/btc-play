import { useState } from 'react';

import Top from './Top/Top';
import Filters from './Filters/FIlters';

import classnames from 'classnames';

import styles from './search.module.scss';

const Search = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={classnames(styles.search, { [styles.active]: isActive })}>
      <Top isActive={isActive} setIsActive={setIsActive} />
      {isActive && (
        <div className={styles.content}>
          <p className={styles.description}>
            Search requires at least 3 characters.
          </p>

          <div className={styles.block}>
            <div className={styles.blockWrapper}>
              <Filters />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
