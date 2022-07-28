import { useMemo } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import cn from 'classnames';

import SliderNavigation from '../SliderControllers/Navigation/Navigation';

import Logo1 from '../../assets/images/gameProviders/img-1.png';
import Logo2 from '../../assets/images/gameProviders/img-2.png';
import Logo3 from '../../assets/images/gameProviders/img-3.png';
import Logo4 from '../../assets/images/gameProviders/img-4.png';
import Logo5 from '../../assets/images/gameProviders/img-5.png';

import styles from './gameProviders.module.scss';

const GameProviders = () => {
  const gameLists = useMemo(
    () => [
      {
        id: 0,
        image: Logo1.src,
        url: '/',
      },
      {
        id: 0,
        image: Logo2.src,
        url: '/',
      },
      {
        id: 0,
        image: Logo3.src,
        url: '/',
      },
      {
        id: 0,
        image: Logo4.src,
        url: '/',
      },
      {
        id: 0,
        image: Logo5.src,
        url: '/',
      },
      {
        id: 0,
        image: Logo1.src,
        url: '/',
      },
      {
        id: 0,
        image: Logo2.src,
        url: '/',
      },
      {
        id: 0,
        image: Logo3.src,
        url: '/',
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
      <div className={styles.top}>
        <h2 className={cn('title-section')}>Game providers</h2>
        <div className={styles.controlles}>
          <SliderNavigation extClassName="gameProvider" />
        </div>
      </div>
      <div className={styles.blocks}>
        <Swiper {...sliderParams}>
          {gameLists.map(({ id, image, url }) => {
            return (
              <SwiperSlide key={id} className={styles.block}>
                <img src={image} alt="" />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default GameProviders;
