import { useMemo } from 'react';
import Sorting from '../../Sorting/Sorting';

import styles from './language.module.scss';

const Language = () => {
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
    <div className={styles.block}>
      <p className={styles.label}>Change language</p>
      <Sorting options={options} />
    </div>
  );
};

export default Language;
