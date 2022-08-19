import { useMemo } from 'react';

import Banner from '../../Banner/Banner';

import El1 from '../../../assets/images/banners/banner-2/el-1.png';
import El2 from '../../../assets/images/banners/banner-2/el-2.png';
import El3 from '../../../assets/images/banners/banner-2/el-3.png';

import styles from './games.module.scss';

const Games = () => {
  const gamesList = useMemo(
    () => [
      {
        id: 0,
        subtitle: 'Crash',
        title: 'Best Crash Game <br> U Ever Know',
        button: 'Play Now',
        buttonBorder: true,
        url: '/',
        backgroundColor: '#D85D5D',
        backgroundElement: El1.src,
      },
      {
        id: 1,
        subtitle: 'Slots',
        title: 'Variety of <br> 10000+ games',
        button: 'Play Now',
        buttonBorder: true,
        url: '/',
        backgroundColor: '#732EBF',
        backgroundElement: El2.src,
      },
      {
        id: 2,
        subtitle: 'Live Casino',
        title: 'Live dealers <br> say hello!',
        button: 'Play Now',
        buttonBorder: true,
        url: '/',
        backgroundColor: '#C173B5',
        backgroundElement: El3.src,
      },
    ],
    []
  );

  return (
    <div className={styles.blocks}>
      {gamesList.map(
        ({
          id,
          subtitle,
          title,
          button,
          buttonBorder,
          url,
          backgroundColor,
          backgroundElement,
        }) => {
          return (
            <div className={styles.block} key={id}>
              <Banner
                title={title}
                subtitle={subtitle}
                button={button}
                buttonBorder={buttonBorder}
                url={url}
                backgroundColor={backgroundColor}
                backgroundElement={backgroundElement}
              />
            </div>
          );
        }
      )}
    </div>
  );
};

export default Games;
