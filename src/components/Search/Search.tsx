import { useState, FC, useEffect } from 'react';

import Top from './Top/Top';
import Bottom from './Bottom/Bottom';

import classnames from 'classnames';

import styles from './search.module.scss';

interface IProps {
  setIsOpenSearchBlock: (val: boolean) => void;
}

const Search: FC<IProps> = ({ setIsOpenSearchBlock }) => {
  const [isActive, setIsActive] = useState(false);
  const [isActiveResults, setIsActiveResults] = useState(false);

  useEffect(() => {
    setIsOpenSearchBlock(isActiveResults);
    console.log(isActiveResults);
  }, [isActiveResults]);

  return (
    <div
      className={classnames(styles.search, {
        [styles.active]: isActiveResults,
      })}
    >
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
