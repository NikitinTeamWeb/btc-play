import { useMemo, FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import cn from 'classnames';

import SliderNavigation from '../SliderControllers/Navigation/Navigation';
import Game from './Game/Game';

import Game1 from '../../assets/images/banners/games/img-1.png';
import Game2 from '../../assets/images/banners/games/img-2.png';
import Game3 from '../../assets/images/banners/games/img-3.png';
import Game4 from '../../assets/images/banners/games/img-4.png';
import Game5 from '../../assets/images/banners/games/img-5.png';
import Game6 from '../../assets/images/banners/games/img-6.png';
import Game7 from '../../assets/images/banners/games/img-7.png';

import styles from './casinoGames.module.scss';

interface IProps {
  isSwiper: boolean;
}

const CasinoGames: FC<IProps> = ({ isSwiper }) => {
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

  const sliderParams = useMemo(
    () => ({
      spaceBetween: 20,
      slidesPerView: 6,
      autoHeight: true,
      modules: [Pagination, Navigation],
      className: 'gameProvider-swiper',
      navigation: {
        nextEl: '.gameProvider-next-btn',
        prevEl: '.gameProvider-prev-btn',
      },
    }),
    []
  );

  return (
    <div className={styles.container}>
      {isSwiper && (
        <div className={styles.top}>
          <h2 className={cn('title-section')}>Casino game</h2>
          <div className={styles.controlles}>
            <SliderNavigation extClassName="gameProvider" />
          </div>
        </div>
      )}
      <div className={cn(styles.blocks, { [styles.isSwiper]: isSwiper })}>
        {isSwiper ? (
          <Swiper {...sliderParams}>
            {gamesList.map(({ id, title, image, url, edge, coomigSoon }) => {
              return (
                <SwiperSlide key={id} className={styles.block}>
                  <Game
                    title={title}
                    image={image}
                    url={url}
                    edge={edge}
                    coomigSoon={coomigSoon}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        ) : (
          gamesList.map(({ id, title, image, url, edge, coomigSoon }) => {
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
          })
        )}
      </div>
    </div>
  );
};

export default CasinoGames;
