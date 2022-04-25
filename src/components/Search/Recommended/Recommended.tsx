import { useMemo } from 'react';

import styles from './recommended.module.scss';

import Img1 from '../../../assets/images/recommendedGames/img1.png';
import Img2 from '../../../assets/images/recommendedGames/img2.png';
import Img3 from '../../../assets/images/recommendedGames/img3.png';

import filterIcon from '../../../assets/images/icons/filter.png';

const Recommended = () => {
  const options = useMemo(
    () => [
      {
        id: 0,
        image: Img1.src,
      },
      {
        id: 1,
        image: Img2.src,
      },
      {
        id: 2,
        image: Img3.src,
      },
    ],
    []
  );

  return (
    <div className={styles.block}>
      <div className={styles.title}>
        <span className={styles.icon}>
          <img src={filterIcon.src} alt="" />
        </span>
        Recommended Games
      </div>
      <div className={styles.items}>
        {options.map(({ id, image }) => {
          return (
            <div className={styles.item} key={id}>
              <span className={styles.icon}>
                <img src={image} alt="" />
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Recommended;
