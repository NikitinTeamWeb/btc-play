import { useMemo } from 'react';

import Sorting from '../../Sorting/Sorting';

import styles from './filters.module.scss';

import FilterIcon from '../../../assets/images/icons/filter.svg';

const Filters = () => {
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
  const options2 = useMemo(
    () => [
      {
        title: `За популярністю123`,
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
  const options3 = useMemo(
    () => [
      {
        title: `За популярністю4567`,
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
    <div className={styles.block}>
      <div className={styles.title}>
        <span className={styles.icon}>
          <FilterIcon />
        </span>
        Filters
      </div>
      <div className={styles.selects}>
        <div className={styles.select}>
          <Sorting title="Game provires" options={options} />
        </div>
        <div className={styles.select}>
          <Sorting title="Themes" options={options2} />
        </div>
        <div className={styles.select}>
          <Sorting title="Features" options={options3} />
        </div>
      </div>
    </div>
  );
};

export default Filters;
