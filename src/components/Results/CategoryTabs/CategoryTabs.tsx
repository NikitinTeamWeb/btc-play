import { FC, useMemo, useState, useEffect } from 'react';
import cn from 'classnames';

import styles from './categoryTabs.module.scss';

interface IProp {
  id: number;
  title: string;
  category: string;
}

interface IProps {
  setIsActiveCatagery: (val: string) => void;
  isActiveCatagery: string;
  resultsCategory?: Array<IProp>;
}

const CategoryTabs: FC<IProps> = ({
  setIsActiveCatagery,
  isActiveCatagery,
  resultsCategory,
}) => {
  const [isActive, setIsActive] = useState('');

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
      {resultsCategory &&
        resultsCategory.map(({ id, title, category }) => {
          return (
            <div
              className={cn(styles.item, {
                [styles.active]: isActiveCatagery == category,
              })}
              key={id}
              onClick={() => handleActiveCategory(category)}
            >
              {title}
            </div>
          );
        })}
    </div>
  );
};

export default CategoryTabs;
