import { useState } from 'react';

import Top from './Top/Top';
import Bottom from './Bottom/Bottom';

import classnames from 'classnames';

import styles from './search.module.scss';

const Search = () => {
  const [isActive, setIsActive] = useState(false);
  const [isActiveResults, setIsActiveResults] = useState(false);

  return (
    <div className={classnames(styles.search, { [styles.active]: isActive })}>
      <Top
        isActive={isActive}
        setIsActive={setIsActive}
        setIsActiveResults={setIsActiveResults}
      />
      {isActiveResults && <Bottom />}
    </div>
  );
};

export default Search;
