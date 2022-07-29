import { FC, useMemo, useState, useEffect } from 'react';
import cn from 'classnames';

import styles from './categoryTabs.module.scss';

interface IProps {
  setIsActiveCatagery: (val: string) => void;
  isActiveCatagery: string;
}

const CategoryTabs: FC<IProps> = ({
  setIsActiveCatagery,
  isActiveCatagery,
}) => {
  const [isActive, setIsActive] = useState('');

  const categoryList = useMemo(
    () => [
      {
        id: 0,
        title: 'My Bets',
        value: 'myBets',
      },
      {
        id: 1,
        title: 'All Bets',
        value: 'allBets',
      },
      {
        id: 2,
        title: 'High Rollers Bets',
        value: 'highRollersBets',
      },
      {
        id: 3,
        title: 'Races',
        value: 'races',
      },
    ],
    []
  );

  const handleActiveCategory = (value: string) => {
    setIsActive(value);
  };

  useEffect(() => {
    setIsActiveCatagery(isActive);
  }, [isActive]);

  useEffect(() => {
    setIsActive(isActiveCatagery);
  }, []);

  return (
    <div className={styles.items}>
      {categoryList.map(({ id, title, value }) => {
        return (
          <div
            className={cn(styles.item, {
              [styles.active]: isActiveCatagery == value,
            })}
            key={id}
            onClick={() => handleActiveCategory(value)}
          >
            {title}
          </div>
        );
      })}
    </div>
  );
};

export default CategoryTabs;
