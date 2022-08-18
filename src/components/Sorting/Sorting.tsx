import { useState, useMemo, useCallback, useEffect } from 'react';
import Select from '../Select/Select';

import styles from './sorting.module.scss';

interface IOption {
  title: string;
  value: string;
  icon?: string;
}
interface IProps {
  title?: string;
  style?: string;
  options: Array<IOption>;
}

const Sorting: React.FC<IProps> = ({ title = '', options, style }) => {
  const [sortingType, setSortingType] = useState<string>('');
  const [sortingIcon, setSortingIcon] = useState<string>('');
  const [sortingTitle, setSortingTitle] = useState<string>('');

  const getSortingData = useCallback(
    (value: string, title: string, icon?: string) => {
      setSortingTitle(title);
      setSortingType(value);
      if (icon) {
        setSortingIcon(icon);
      }
    },
    []
  );

  useEffect(() => {
    {
      options[0].icon
        ? getSortingData(options[0].title, options[0].value, options[0].icon)
        : getSortingData(options[0].title, options[0].value);
    }
  }, []);

  return (
    <>
      <Select
        choosedType={sortingType}
        title={sortingTitle}
        icon={sortingIcon}
        onChange={getSortingData}
        options={options}
        placeholder={title}
        style={style}
      />
    </>
  );
};

export default Sorting;
