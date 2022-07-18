import { useMemo } from 'react';
import Link from 'next/link';

import Promotions from './Promotions/Promotions';

import styles from './list.module.scss';

import HomeIcon from '../../../assets/images/menu/icon_main.svg';
import SlotsIcon from '../../../assets/images/menu/icon_slots.svg';
import LiveIcon from '../../../assets/images/menu/icon_live.svg';
import VipIcon from '../../../assets/images/menu/icon_vip.svg';
import BlackjackIcon from '../../../assets/images/menu/icon_blackjack.svg';
import AffiliateIcon from '../../../assets/images/menu/icon_affiliate.svg';

const List = () => {
  const navigationList = useMemo(
    () => [
      {
        id: 0,
        title: `Home`,
        icon: <HomeIcon />,
        url: '/',
      },
      {
        id: 1,
        title: `Slots`,
        icon: <SlotsIcon />,
        url: '/',
      },
      {
        id: 2,
        title: `Live Casino`,
        icon: <LiveIcon />,
        url: '/',
      },
      {
        id: 3,
        title: `VIP Club`,
        icon: <VipIcon />,
        url: '/',
      },
      {
        id: 4,
        title: `Promotions`,
        icon: <BlackjackIcon />,
        url: '/',
      },
      {
        id: 5,
        title: `Affiliate`,
        icon: <AffiliateIcon />,
        url: '/',
      },
    ],
    []
  );

  return (
    <div className={styles.list}>
      {navigationList.map(({ id, title, icon, url }) => {
        return title !== 'Promotions' ? (
          <Link href={url} key={id}>
            <a className={styles.link}>
              <span className={styles.icon}>{icon}</span>
              {title}
            </a>
          </Link>
        ) : (
          <div className={styles.promotions} key={id}>
            <div className={styles.link}>
              <span className={styles.icon}>{icon}</span>
              {title}
            </div>
            <Promotions />
          </div>
        );
      })}
    </div>
  );
};

export default List;
