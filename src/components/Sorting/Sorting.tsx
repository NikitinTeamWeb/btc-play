import { useState, useMemo, useCallback } from 'react';
import Select from '../Select/Select';

import styles from './sorting.module.scss';

interface IProps {
  title: string;
}

const Sorting: React.FC<IProps> = ({ title }) => {
  const [sortingType, setSortingType] = useState<string>('');
  const [sortingTitle, setSortingTitle] = useState<string>('');

  const getSortingData = useCallback((value: string, title: string) => {
    setSortingTitle(title);
    setSortingType(value);
  }, []);

  const options = useMemo(
    () => [
      {
        title: `За популярністю`,
        value: 'popularity',
      },
      {
        title: `За новинками`,
        value: 'newest',
      },
      {
        title: `Ціна від найнижчої`,
        value: 'lowest',
      },
      {
        title: `Ціна від найвищої`,
        value: 'expensive',
      },
    ],
    []
  );

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
