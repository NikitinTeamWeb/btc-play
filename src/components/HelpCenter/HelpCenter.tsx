import { useMemo, useState, FC } from 'react';
import styles from './helpCenter.module.scss';

import Tabs from './Tabs/Tabs';
import { helpList } from './helpList';

const HelpCenter = () => {
  const [isActiveCatagery, setIsActiveCatagery] = useState(0);
  return (
    <div className={styles.container}>
      <h1 className={'title-section'}>Help center</h1>
      <div className={styles.content}>
        <div className={styles.tabs}>
          <Tabs
            setIsActiveCatagery={setIsActiveCatagery}
            isActiveCatagery={isActiveCatagery}
            helpList={helpList}
          />
        </div>
        <div className={styles.block}>
          {helpList.map(
            ({ id, title, component }) =>
              isActiveCatagery === id && (
                <div className={styles.bottom} key={id}>
                  <h2>{title}</h2>
                  {component}
                </div>
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default HelpCenter;
