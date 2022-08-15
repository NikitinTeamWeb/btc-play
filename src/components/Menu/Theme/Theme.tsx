import { FC, useState } from 'react';
import ModeColor from '../../ModeColor/ModeColor';

import styles from './theme.module.scss';

interface IProps {
  isCloseMenu: boolean;
}

const Theme: FC<IProps> = ({ isCloseMenu }) => {
  return (
    <div className={styles.block}>
      {!isCloseMenu && <p className={styles.label}>Theme</p>}
      <div className={styles.main}>
        <ModeColor isCloseMenu={isCloseMenu} />
        {!isCloseMenu && <p className={styles.text}>Night</p>}
      </div>
    </div>
  );
};

export default Theme;
