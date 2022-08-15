import { FC } from 'react';
import cn from 'classnames';
import styles from './support.module.scss';

import SupportIcon from '../../../assets/images/icons/support.svg';
interface IProps {
  isCloseMenu: boolean;
}

const Support: FC<IProps> = ({ isCloseMenu }) => {
  return (
    <div className={cn(styles.button, { [styles.closeMenu]: isCloseMenu })}>
      <span className={styles.icon}>
        <SupportIcon />
      </span>
      {!isCloseMenu && 'Support chat'}
    </div>
  );
};

export default Support;
