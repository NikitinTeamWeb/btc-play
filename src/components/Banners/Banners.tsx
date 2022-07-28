import { useMemo } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';

import SliderPagination from '../SliderControllers/Pagination/Pagination';
import SliderNavigation from '../SliderControllers/Navigation/Navigation';
import Banner from '../Banner/Banner';

import El1 from '../../assets/images/banners/banner-1/el-1.png';
import El2 from '../../assets/images/banners/banner-1/el-2.png';
import El3 from '../../assets/images/banners/banner-1/el-3.png';
import BG1 from '../../assets/images/banners/banner-1/bg-1.png';
import BG2 from '../../assets/images/banners/banner-1/bg-2.png';
import BG3 from '../../assets/images/banners/banner-1/bg-3.png';

import styles from './banners.module.scss';
import 'swiper/css';

const Banners = () => {
  const bannersList = useMemo(
    () => [
      {
        id: 0,
        title: 'Check out <br> our hot <br> promotions',
        button: 'Detail',
        url: '/',
        backgroundImage: BG1.src,
        backgroundElement: El1.src,
      },
      {
        id: 1,
        title: 'Register now and start journey',
        button: 'Register now',
        url: '/',
        backgroundImage: BG2.src,
        backgroundElement: El2.src,
      },
      {
        id: 2,
        title: 'Create your Personal bonus andplay your way',
        button: 'Detail',
        url: '/',
        backgroundImage: BG3.src,
        backgroundElement: El3.src,
      },
      {
        id: 3,
        title: '1Create your Personal bonus andplay your way',
        button: 'Detail',
        url: '/',
        backgroundImage: BG3.src,
        backgroundElement: El3.src,
      },
    ],
    []
  );

  const sliderParams = useMemo(
    () => ({
      spaceBetween: 20,
      slidesPerView: 3,
      autoHeight: true,
      modules: [Pagination, Navigation],
      className: 'main-swiper',
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.banners-next-btn',
        prevEl: '.banners-prev-btn',
      },
    }),
    []
  );

  return (
    <div className={styles.container}>
      <Swiper {...sliderParams}>
        {bannersList.map(
          ({ id, title, button, url, backgroundImage, backgroundElement }) => {
            return (
              <SwiperSlide key={id} className={styles.banner}>
                <Banner
                  title={title}
                  button={button}
                  url={url}
                  backgroundImage={backgroundImage}
                  backgroundElement={backgroundElement}
                />
              </SwiperSlide>
            );
          }
        )}

        <div className={styles.controlles}>
          <SliderPagination extClassName="banners" />
          <SliderNavigation extClassName="banners" />
        </div>
      </Swiper>
    </div>
  );
};

export default Banners;
