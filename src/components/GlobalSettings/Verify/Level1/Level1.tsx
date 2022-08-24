import { useMemo } from 'react';
import cn from 'classnames';
import Sorting from '../../../Sorting/Sorting';

import styles from './level1.module.scss';

const Level1 = () => {
  const options = useMemo(
    () => [
      {
        title: `+1 Canada`,
        value: 'canada',
      },
      {
        title: `+1 Canada`,
        value: 'canada2',
      },
      {
        title: `+1 Canada`,
        value: 'canada3',
      },
      {
        title: `+1 Canada`,
        value: 'canada4',
      },
    ],
    []
  );
  return (
    <div className={styles.container}>
      <div className={styles.items}>
        <div className={cn('default-input', styles.item)}>
          <label>First name</label>
          <input type="text" placeholder="Enter first name" />
        </div>
        <div className={cn('default-input', styles.item)}>
          <label>Last name</label>
          <input type="text" placeholder="Enter last name" />
        </div>
      </div>
      <div className={cn('default-input', styles.item, styles.group)}>
        <label>Username</label>
        <div className={styles.inputs}>
          <input type="text" placeholder="Day" />
          <input type="text" placeholder="Month" />
          <input type="text" placeholder="Year" />
        </div>
      </div>
      <div className={cn('default-input select', styles.item)}>
        <label>Country Code</label>
        <div className={styles.select}>
          <Sorting options={options} style="grey" />
        </div>
      </div>
      <div className={cn('default-input', styles.item)}>
        <label>Address</label>
        <input type="text" placeholder="Enter address" />
      </div>
      <div className={styles.items}>
        <div className={cn('default-input', styles.item)}>
          <label>City</label>
          <input type="text" placeholder="Enter city" />
        </div>
        <div className={cn('default-input', styles.item)}>
          <label>Postal Code</label>
          <input type="text" placeholder="Enter code" />
        </div>
      </div>
      <div className={cn(styles.button, 'button button-sm')}>Save change</div>
    </div>
  );
};

export default Level1;
