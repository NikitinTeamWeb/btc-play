import { useMemo } from 'react';

import Game from '../Game/Game';

import Game1 from '../../assets/images/banners/games/img-1.png';
import Game2 from '../../assets/images/banners/games/img-2.png';
import Game3 from '../../assets/images/banners/games/img-3.png';
import Game4 from '../../assets/images/banners/games/img-4.png';
import Game5 from '../../assets/images/banners/games/img-5.png';
import Game6 from '../../assets/images/banners/games/img-6.png';
import Game7 from '../../assets/images/banners/games/img-7.png';

import styles from './games.module.scss';

const Games = () => {
  const gamesList = useMemo(
    () => [
      {
        id: 0,
        title: 'Classic Dice',
        image: Game1.src,
        url: '/',
        edge: 'House Edge 1%',
      },
      {
        id: 1,
        title: 'Live Baccarat',
        image: Game2.src,
        url: '/',
        edge: 'House Edge 1%',
      },
      {
        id: 2,
        title: 'Dragon Tiger',
        image: Game3.src,
        url: '/',
        edge: 'House Edge 1%',
      },
      {
        id: 3,
        title: 'Fan Tan',
        image: Game4.src,
        url: '/',
        edge: 'House Edge 1%',
      },
      {
        id: 4,
        title: 'Dream Catcher',
        image: Game5.src,
        url: '/',
        edge: 'House Edge 1%',
      },
      {
        id: 5,
        title: 'Deal or NoDeal',
        image: Game6.src,
        url: '/',
        edge: 'House Edge 1%',
      },
      {
        id: 6,
        title: 'Classic Dice',
        image: Game7.src,
        url: '/',
        edge: 'House Edge 1%',
      },
      {
        id: 7,
        title: 'Live Baccarat',
        image: Game1.src,
        url: '/',
        edge: 'House Edge 1%',
      },
      {
        id: 8,
        title: 'Dragon Tiger',
        image: Game3.src,
        url: '/',
        edge: 'House Edge 1%',
      },
      {
        id: 9,
        title: 'Fan Tan',
        image: Game4.src,
        url: '/',
        edge: 'House Edge 1%',
      },
      {
        id: 10,
        title: 'Dream Catcher',
        image: Game5.src,
        url: '/',
        edge: 'House Edge 1%',
      },
      {
        id: 11,
        title: 'Deal or NoDeal',
        image: Game6.src,
        url: '/',
        edge: 'House Edge 1%',
        coomigSoon: true,
      },
    ],
    []
  );

  return (
    <div className={styles.container}>
      <div className={styles.blocks}>
        {gamesList.map(({ id, title, image, url, edge, coomigSoon }) => {
          return (
            <div className={styles.block} key={id}>
              <Game
                title={title}
                image={image}
                url={url}
                edge={edge}
                coomigSoon={coomigSoon}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Games;
