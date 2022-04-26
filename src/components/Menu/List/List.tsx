import { useMemo } from 'react';
import Link from 'next/link';

import styles from './list.module.scss';

import HomeIcon from '../../../assets/images/menu/icon_main.png';
import SlotsIcon from '../../../assets/images/menu/icon_slots.png';
import LiveIcon from '../../../assets/images/menu/icon_live.png';
import VipIcon from '../../../assets/images/menu/icon_vip.png';
import BlackjackIcon from '../../../assets/images/menu/icon_blackjack.png';

const List = () => {
  const navigationList = useMemo(
    () => [
      {
        id: 0,
        title: `Home`,
        icon: HomeIcon.src,
        url: '/',
      },
      {
        id: 1,
        title: `Slots`,
        icon: SlotsIcon.src,
        url: '/',
      },
      {
        id: 2,
        title: `Live Casino`,
        icon: LiveIcon.src,
        url: '/',
      },
      {
        id: 3,
        title: `VIP Club`,
        icon: VipIcon.src,
        url: '/',
      },
      {
        id: 4,
        title: `Promotions`,
        icon: BlackjackIcon.src,
        url: '/',
      },
    ],
    []
  );

  return (
    <div className={styles.list}>
      {navigationList.map(({ id, title, icon, url }) => {
        return (
          <Link href={url} key={id}>
            <a className={styles.link}>
              <span className={styles.icon}>
                <img src={icon} alt="" />
              </span>
              {title}
            </a>
          </Link>
        );
      })}
    </div>
  );
};

export default List;
