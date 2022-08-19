import Games from './Games/Games';
import cn from 'classnames';

import styles from './bannerGames.module.scss';

const BannerGames = () => {
  return (
    <div className={styles.content}>
      <h2 className={cn(styles.title, 'title-section')}>Casino game</h2>
      <div className={styles.games}>
        <Games />
      </div>
    </div>
  );
};

export default BannerGames;
