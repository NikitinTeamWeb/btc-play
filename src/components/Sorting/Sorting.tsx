import { useState, useMemo, useCallback, useEffect } from 'react';
import Select from '../Select/Select';

import styles from './sorting.module.scss';

interface IProps {
  title?: string;
  style?: string;
  options: { title: string; value: string }[];
}

const Sorting: React.FC<IProps> = ({ title = 'ytn', options, style }) => {
  const [sortingType, setSortingType] = useState<string>('');
  const [sortingIcon, setSortingIcon] = useState<string>('');
  const [sortingTitle, setSortingTitle] = useState<string>('');

  const getSortingData = useCallback(
    (value: string, title: string, icon: string) => {
      setSortingTitle(title);
      setSortingType(value);
      if (icon) {
        setSortingIcon(icon);
      }
    },
    []
  );

  // useEffect(() => {
  //   getSortingData('engils,', 'valud=e');
  // }, []);

  return (
    <div className={styles.sorting}>
      <Select
        choosedType={sortingType}
        title={sortingTitle}
        icon={sortingIcon}
        onChange={getSortingData}
        options={options}
        placeholder={title}
        style={style}
      />
    </div>
  );
};

export default Sorting;
