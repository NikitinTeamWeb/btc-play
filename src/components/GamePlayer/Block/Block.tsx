import { FC, useState } from 'react';
import cn from 'classnames';
import Favorite from '../Favorite/Favorite';
import MainContent from '../MainContent/MainContent';

import StatisticIcon from '../../../assets/images/icons/icon_statistic.svg';
import FullscreenIcon from '../../../assets/images/icons/icon_fullscreen.svg';

import styles from './block.module.scss';

interface IProps {
  isActive: string;
}

const Block: FC<IProps> = ({ isActive }) => {
  const [isFavoriteNumber, setIsFavoriteNumber] = useState(19);

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <MainContent isActive={isActive} />
      </div>
      <div className={styles.bottom}>
        <div className={styles.favorite}>
          <Favorite
            setIsFavoriteNumber={setIsFavoriteNumber}
            isFavoriteNumber={isFavoriteNumber}
          />
        </div>
        <div className={styles.statitic}>
          <StatisticIcon />
        </div>
        <div className={styles.fullscreen}>
          <FullscreenIcon />
        </div>
      </div>
    </div>
  );
};

export default Block;
