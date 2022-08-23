import { useState } from 'react';

import cn from 'classnames';

import Tabs from './Tabs/Tabs';
import { settingsList } from './settingsList';

import SettingsIcon from '../../assets/images/globalSettings/setting-2.svg';
import CloseIcon from '../../assets/images/chat/close.svg';
import styles from './globalSettings.module.scss';

const GlobalSettings = () => {
  const [isActiveCatagery, setIsActiveCatagery] = useState(0);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.icon}>
          <SettingsIcon />
        </div>
        <h1 className={cn('title-section', styles.title)}>Global settings</h1>
        <div className={styles.close}>
          <CloseIcon />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.tabs}>
          <Tabs
            setIsActiveCatagery={setIsActiveCatagery}
            isActiveCatagery={isActiveCatagery}
            helpList={settingsList}
          />
        </div>
        <div className={styles.block}>
          {settingsList.map(
            ({ id, title, component }) =>
              isActiveCatagery === id && (
                <div className={styles.bottom} key={id}>
                  {component}
                </div>
              )
          )}
        </div>
      </div>
    </div>
  );
};
export default GlobalSettings;
