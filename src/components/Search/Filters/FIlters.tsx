import { useState, useMemo, useCallback } from 'react';
import Sorting from '../../Sorting/Sorting';

import styles from './filters.module.scss';

import filterIcon from '../../../assets/images/icons/filter.png';

const List = () => {
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
  // const options2 = useMemo(
  //   () => [
  //     {
  //       title: `За популярністю`,
  //       value: 'popularity',
  //     },
  //     {
  //       title: `За новинками`,
  //       value: 'newest',
  //     },
  //     {
  //       title: `Ціна від найнижчої`,
  //       value: 'lowest',
  //     },
  //     {
  //       title: `Ціна від найвищої`,
  //       value: 'expensive',
  //     },
  //   ],
  //   []
  // );
  // const options3 = useMemo(
  //   () => [
  //     {
  //       title: `За популярністю`,
  //       value: 'popularity',
  //     },
  //     {
  //       title: `За новинками`,
  //       value: 'newest',
  //     },
  //     {
  //       title: `Ціна від найнижчої`,
  //       value: 'lowest',
  //     },
  //     {
  //       title: `Ціна від найвищої`,
  //       value: 'expensive',
  //     },
  //   ],
  //   []
  // );

  return (
    <div className={styles.block}>
      <div className={styles.title}>
        <span className={styles.icon}>
          <img src={filterIcon.src} alt="" />
        </span>
        Filters
      </div>
      <div className={styles.selects}>
        <div className={styles.select}>
          <Sorting title="Game provires" />
        </div>
        <div className={styles.select}>
          <Sorting title="Themes" />
        </div>
        <div className={styles.select}>
          <Sorting title="Features" />
        </div>
      </div>
    </div>
  );
};

export default List;
