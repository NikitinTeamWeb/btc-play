import { useMemo, useState } from 'react';
import Sorting from '../Sorting/Sorting';
import CategoryTabs from './CategoryTabs/CategoryTabs';
import Races from '../Races/Races';
import AllBets from '../AllBets/AllBets';

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

  const category = useMemo(
    () => [
      {
        component: <AllBets />,
        category: 'myBets',
      },
      {
        component: <AllBets />,
        category: 'allBets',
      },
      {
        component: <AllBets />,
        category: 'highRollersBets',
      },
      {
        component: <Races />,
        category: 'races',
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
      <div className={styles.content}>
        {category.map(
          ({ category, component }) =>
            isActiveCatagery === category && (
              <div className={styles.bottom} key={category}>
                {component}
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default Results;
