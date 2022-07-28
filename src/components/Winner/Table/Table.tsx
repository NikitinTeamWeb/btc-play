import { useMemo } from 'react';
import Link from 'next/link';

import styles from './table.module.scss';

import WinnerIcon1 from '../../../assets/images/main/winner-1.svg';
import WinnerIcon2 from '../../../assets/images/main/winner-2.svg';
import WinnerIcon3 from '../../../assets/images/main/winner-3.svg';
import ArrowIcon from '../../../assets/images/icons/arrow.svg';

import BTCIcon from '../../../assets/images/footer/BTC-color.png';
import ETHIcon from '../../../assets/images/footer/ETH-color.png';

const Table = () => {
  const winnersList = useMemo(
    () => [
      {
        id: 0,
        icon: <WinnerIcon1 />,
        name: '8345',
        description: 'Main',
        walletValue: '-0.0000009822',
        walletIcon: ETHIcon.src,
        url: '/',
      },
      {
        id: 1,
        icon: <WinnerIcon2 />,
        name: 'Casibilo',
        description: 'Main',
        walletValue: '-0.0000009822',
        walletIcon: BTCIcon.src,
        url: '/',
      },
      {
        id: 2,
        icon: <WinnerIcon3 />,
        name: 'Maximus',
        description: 'Main',
        walletValue: '-0.00009845',
        walletIcon: BTCIcon.src,
        url: '/',
      },
    ],
    []
  );

  return (
    <div className={styles.block}>
      {winnersList.map(
        ({ id, icon, name, description, walletValue, walletIcon, url }) => {
          return (
            <div key={id} className={styles.item}>
              <div className={styles.name}>
                <span className={styles.icon}>{icon}</span>
                {name}
              </div>
              <div className={styles.description}>{description}</div>
              <div className={styles.wallet}>
                <p>{walletValue}</p>
                <span className={styles.icon}>
                  <img src={walletIcon} alt="" />
                </span>
              </div>
              <Link href={url}>
                <a className={styles.arrow}>
                  <ArrowIcon />
                </a>
              </Link>
            </div>
          );
        }
      )}
    </div>
  );
};

export default Table;
