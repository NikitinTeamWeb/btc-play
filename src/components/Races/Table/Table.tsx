import { useMemo } from 'react';
import cn from 'classnames';

import WinnerIcon1 from '../../../assets/images/main/winner-1.svg';
import WinnerIcon2 from '../../../assets/images/main/winner-2.svg';
import WinnerIcon3 from '../../../assets/images/main/winner-3.svg';
import Avatar from '../../../assets/images/main/avatar.png';
import BTC from '../../../assets/images/footer/BTC-color.png';

import styles from './table.module.scss';

const Table = () => {
  const winnersList = useMemo(
    () => [
      {
        position: 1,
        avatar: Avatar.src,
        name: 'Nikolay',
        wagered: '0.0000005',
        wageredIcon: BTC.src,
        prize: '0.04396081',
        prizeIcon: BTC.src,
        prizePercent: '(50%)',
      },
      {
        position: 2,
        avatar: Avatar.src,
        name: 'Nikolay',
        wagered: '0.0000005',
        wageredIcon: BTC.src,
        prize: '0.04396081',
        prizeIcon: BTC.src,
        prizePercent: '(50%)',
      },
      {
        position: 3,
        avatar: Avatar.src,
        name: 'Nikolay',
        wagered: '0.0000005',
        wageredIcon: BTC.src,
        prize: '0.04396081',
        prizeIcon: BTC.src,
        prizePercent: '(50%)',
      },
      {
        position: 4,
        avatar: Avatar.src,
        name: 'Nikolay',
        wagered: '0.0000005',
        wageredIcon: BTC.src,
        prize: '0.04396081',
        prizeIcon: BTC.src,
        prizePercent: '(50%)',
      },
      {
        position: 5,
        avatar: Avatar.src,
        name: 'Nikolay',
        wagered: '0.0000005',
        wageredIcon: BTC.src,
        prize: '0.04396081',
        prizeIcon: BTC.src,
        prizePercent: '(50%)',
      },
      {
        position: 6,
        avatar: Avatar.src,
        name: 'Nikolay',
        wagered: '0.0000005',
        wageredIcon: BTC.src,
        prize: '0.04396081',
        prizeIcon: BTC.src,
        prizePercent: '(50%)',
      },
      {
        position: 7,
        avatar: Avatar.src,
        name: 'Nikolay',
        wagered: '0.0000005',
        wageredIcon: BTC.src,
        prize: '0.04396081',
        prizeIcon: BTC.src,
        prizePercent: '(50%)',
      },
      {
        position: 8,
        avatar: Avatar.src,
        name: 'Nikolay',
        wagered: '0.0000005',
        wageredIcon: BTC.src,
        prize: '0.04396081',
        prizeIcon: BTC.src,
        prizePercent: '(50%)',
      },
      {
        position: 9,
        avatar: Avatar.src,
        name: 'Nikolay',
        wagered: '0.0000005',
        wageredIcon: BTC.src,
        prize: '0.04396081',
        prizeIcon: BTC.src,
        prizePercent: '(50%)',
      },
      {
        position: 10,
        avatar: Avatar.src,
        name: 'Nikolay',
        wagered: '0.0000005',
        wageredIcon: BTC.src,
        prize: '0.04396081',
        prizeIcon: BTC.src,
        prizePercent: '(50%)',
      },
    ],
    []
  );

  return (
    <div className={styles.content}>
      <div className={cn(styles.top, styles.items)}>
        <div className={cn(styles.title, styles.position)}>#</div>
        <div className={cn(styles.title, styles.player)}>Player</div>
        <div className={cn(styles.title, styles.wagered)}>Wagered</div>
        <div className={cn(styles.title, styles.prize)}>Prize</div>
      </div>

      <div className={styles.main}>
        {winnersList.map(
          ({
            position,
            avatar,
            name,
            wagered,
            wageredIcon,
            prize,
            prizeIcon,
            prizePercent,
          }) => {
            return (
              <div className={styles.items} key={position}>
                <div className={cn(styles.item, styles.position)}>
                  {position === 1 && <WinnerIcon1 />}
                  {position === 2 && <WinnerIcon2 />}
                  {position === 3 && <WinnerIcon3 />}
                  {position > 3 && position + 'th'}
                </div>
                <div className={cn(styles.item, styles.player)}>
                  <span className={styles.avatar}>
                    <img src={avatar} alt="" />
                  </span>
                  {name}
                </div>
                <div className={cn(styles.item, styles.wagered)}>
                  <span className={styles.icon}>
                    <img src={wageredIcon} alt="" />
                  </span>
                  {wagered}
                </div>
                <div className={cn(styles.item, styles.prize)}>
                  <span className={styles.icon}>
                    <img src={prizeIcon} alt="" />
                  </span>
                  <span className={styles.green}>{prize}</span>
                  {prizePercent}
                </div>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};

export default Table;
