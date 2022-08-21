import { useState, FC, useEffect } from 'react';
import cn from 'classnames';

import styles from './favorite.module.scss';

import StarIcon from '../../../assets/images/icons/icon_star.svg';

interface IProps {
  isFavoriteNumber: number;
  setIsFavoriteNumber: (val: number) => void;
}

const Favorite: FC<IProps> = ({ isFavoriteNumber, setIsFavoriteNumber }) => {
  const [isStateNumber, setIsStateNumber] = useState(isFavoriteNumber);
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavorite = () => {
    setIsFavorite((prev) => !prev);
  };

  useEffect(() => {
    setIsFavoriteNumber(
      isFavorite
        ? isFavoriteNumber + 1
        : isFavoriteNumber > isStateNumber
        ? isFavoriteNumber - 1
        : isStateNumber
    );
  }, [isFavorite]);

  return (
    <div
      className={cn(styles.container, { [styles.active]: isFavorite })}
      onClick={handleFavorite}
    >
      <div className={styles.star}>
        <StarIcon />
      </div>
      <p>
        <span>{isFavoriteNumber}</span>
        Favorite
      </p>
    </div>
  );
};

export default Favorite;
