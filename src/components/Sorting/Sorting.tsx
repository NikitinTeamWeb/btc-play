import { useState, useMemo, useCallback } from 'react';
import Select from '../Select/Select';

import styles from './sorting.module.scss';

interface IProps {
  // options?: Array<any>;
}

const Sorting: React.FC<IProps> = (
  {
    // options = [],
  }
) => {
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
        placeholder={`Сортування`}
      />
    </div>
  );
};

export default Sorting;
