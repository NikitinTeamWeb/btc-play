import { useState, useMemo, useCallback } from 'react';
import Select from '../Select/Select';

import styles from './sorting.module.scss';

interface IProps {
  title: string;
  options: { title: string; value: string }[];
}

const Sorting: React.FC<IProps> = ({ title = 'ytn', options }) => {
  const [sortingType, setSortingType] = useState<string>('');
  const [sortingTitle, setSortingTitle] = useState<string>('');

  const getSortingData = useCallback((value: string, title: string) => {
    setSortingTitle(title);
    setSortingType(value);
  }, []);

  return (
    <div className={styles.sorting}>
      <Select
        choosedType={sortingType}
        title={sortingTitle}
        onChange={getSortingData}
        options={options}
        placeholder={title}
      />
    </div>
  );
};

export default Sorting;
