import { FC } from 'react';
import ArrowLeft from '../../../assets/images/icons/arrow-left.svg';
import ArrowRight from '../../../assets/images/icons/arrow-right.svg';

import styles from './navigation.module.scss';

interface IButtonProps {
  extStyles?: object;
  extClassName?: string;
}

const Navigation: FC<IButtonProps> = ({ extClassName }: IButtonProps) => {
  return (
    <div className={styles.navigation}>
      <button
        className={`${extClassName}-prev-btn ${styles['slider-btn-prev']}`}
      >
        <ArrowLeft />
      </button>
      <button
        className={`${extClassName}-next-btn ${styles['slider-btn-next']}`}
      >
        <ArrowRight />
      </button>
    </div>
  );
};

export default Navigation;
