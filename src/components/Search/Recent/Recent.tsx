import { useMemo } from 'react';

import styles from './recent.module.scss';

import RecentIcon from '../../../assets/images/icons/recent.svg';

const Recent = () => {
  const options = useMemo(
    () => [
      {
        id: 0,
        title: `Money Train`,
      },
      {
        id: 1,
        title: `Fan Tan`,
      },
      {
        id: 2,
        title: `Dream Catcher`,
      },
      {
        id: 3,
        title: `Dragon Tiger`,
      },
    ],
    []
  );

  return (
    <div className={styles.block}>
      <div className={styles.title}>Recent searches</div>
      <div className={styles.items}>
        {options.map(({ id, title }) => {
          return (
            <div className={styles.item} key={id}>
              <span className={styles.icon}>
                <RecentIcon />
              </span>
              <p>{title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Recent;
