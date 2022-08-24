import { useState } from 'react';
import cn from 'classnames';

import Level1 from './Level1/Level1';
import Level2 from './Level2/Level2';
import Level3 from './Level3/Level3';

import styles from './verify.module.scss';

import IconDropdown from '../../../assets/images/faq/icon_dropdown.svg';

const Verify = () => {
  const [isActiveLevel1, setIsActiveLevel1] = useState(false);
  const [isActiveLevel2, setIsActiveLevel2] = useState(false);
  const [isActiveLevel3, setIsActiveLevel3] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={cn(styles.item, { [styles.active]: isActiveLevel1 })}>
          <div
            className={styles.top}
            onClick={() => setIsActiveLevel1((prev) => !prev)}
          >
            <h3 className={styles.title}>Level 1</h3>
            <span className={styles.icon}>
              <IconDropdown />
            </span>
          </div>
          <div className={styles.bottom}>{isActiveLevel1 && <Level1 />}</div>
        </div>
        <div className={cn(styles.item, { [styles.active]: isActiveLevel2 })}>
          <div
            className={styles.top}
            onClick={() => setIsActiveLevel2((prev) => !prev)}
          >
            <h3 className={styles.title}>Level 2</h3>
            <span className={styles.icon}>
              <IconDropdown />
            </span>
          </div>
          <div className={styles.bottom}>{isActiveLevel2 && <Level2 />}</div>
        </div>
        <div className={cn(styles.item, { [styles.active]: isActiveLevel3 })}>
          <div
            className={styles.top}
            onClick={() => setIsActiveLevel3((prev) => !prev)}
          >
            <h3 className={styles.title}>Level 3</h3>
            <span className={styles.icon}>
              <IconDropdown />
            </span>
          </div>
          <div className={styles.bottom}>{isActiveLevel3 && <Level3 />}</div>
        </div>
      </div>
    </div>
  );
};

export default Verify;
