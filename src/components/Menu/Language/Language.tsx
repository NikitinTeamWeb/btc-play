import { useMemo } from 'react';
import Sorting from '../../Sorting/Sorting';

import styles from './language.module.scss';

import EnglichIcon from '../../../assets/images/menu/english.png';

const Language = () => {
  const options = useMemo(
    () => [
      {
        icon: EnglichIcon.src,
        title: `English`,
        value: 'English',
      },
      {
        icon: EnglichIcon.src,
        title: `French`,
        value: 'French',
      },
      {
        icon: EnglichIcon.src,
        title: `Polish`,
        value: 'Polish',
      },
      {
        icon: EnglichIcon.src,
        title: `Spanish`,
        value: 'Spanish',
      },
    ],
    []
  );

  return (
    <div className={styles.block}>
      <p className={styles.label}>Change language</p>
      <Sorting options={options} style="grey" />
    </div>
  );
};

export default Language;
