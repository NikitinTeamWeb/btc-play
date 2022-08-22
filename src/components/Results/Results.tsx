import { useMemo, useState, FC } from 'react';
import Sorting from '../Sorting/Sorting';
import CategoryTabs from './CategoryTabs/CategoryTabs';

import IncognitoIcon from '../../assets/images/icons/icon_incognito.svg';

import styles from './results.module.scss';

interface ICategory {
  id: number;
  component: any;
  category: string;
  title: string;
}

interface IProps {
  resultsCategory?: Array<ICategory>;
}

const Results: FC<IProps> = ({ resultsCategory }) => {
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
            resultsCategory={resultsCategory}
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
        {resultsCategory &&
          resultsCategory.map(
            ({ id, category, component }) =>
              isActiveCatagery === category && (
                <div className={styles.bottom} key={id}>
                  {component}
                </div>
              )
          )}
      </div>
    </div>
  );
};

export default Results;
