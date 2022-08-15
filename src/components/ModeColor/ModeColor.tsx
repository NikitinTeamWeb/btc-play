import { FC } from 'react';
import cn from 'classnames';

import styles from './modeColor.module.scss';

interface IProps {
  isCloseMenu: boolean;
}

const ModeColor: FC<IProps> = ({ isCloseMenu }) => {
  return (
    <div className={cn(styles.container, { [styles.closeMenu]: isCloseMenu })}>
      <input type="checkbox" id="mode"></input>
      <label className={styles.label} htmlFor="mode">
        <span className={styles.block}></span>
      </label>
    </div>
  );
};

export default ModeColor;
