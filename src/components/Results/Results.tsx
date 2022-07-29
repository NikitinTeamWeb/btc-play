import { useMemo, useState } from 'react';
import Sorting from '../Sorting/Sorting';
import CategoryTabs from './CategoryTabs/CategoryTabs';

import IncognitoIcon from '../../assets/images/icons/icon_incognito.svg';

import styles from './results.module.scss';

const Results = () => {
  const [isActiveCatagery, setIsActiveCatagery] = useState('myBets');

  const options = useMemo(
    () => [
      {
        title: `10`,
        value: '10',
      },
      {
        title: `20`,
        value: '20',
      },
      {
        title: `30`,
        value: '30',
      },
      {
        title: `50`,
        value: '50',
      },
    ],
    []
  );

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.tabs}>
          <CategoryTabs
            setIsActiveCatagery={setIsActiveCatagery}
            isActiveCatagery={isActiveCatagery}
          />
        </div>
        <div className={styles.incognito}>
          Incognito <span className={styles.white}>Off</span>
          <span className={styles.icon}>
            <IncognitoIcon />
          </span>
        </div>
        <div className={styles.select}>
          <Sorting options={options} style="grey" />
        </div>
      </div>
      <div className={styles.content}>{isActiveCatagery}</div>
    </div>
  );
};

export default Results;
