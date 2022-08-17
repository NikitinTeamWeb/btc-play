import { useMemo } from 'react';
import styles from './coins.module.scss';

import El1 from '../../../assets/images/footer/USDT.png';
import El2 from '../../../assets/images/footer/litecoin.png';
import El3 from '../../../assets/images/footer/BTC.png';
import El4 from '../../../assets/images/footer/ETH.png';
import El5 from '../../../assets/images/footer/BTC-1.png';
import El6 from '../../../assets/images/footer/DOGE.png';

const Coins = () => {
  const coinsList = useMemo(
    () => [
      {
        id: 0,
        image: El1.src,
      },
      {
        id: 1,
        image: El2.src,
      },
      {
        id: 2,
        image: El3.src,
      },
      {
        id: 3,
        image: El4.src,
      },
      {
        id: 4,
        image: El5.src,
      },
      {
        id: 5,
        image: El6.src,
      },
    ],
    []
  );

  return (
    <>
      {coinsList.map(({ id, image }) => {
        return (
          <div className={styles.block} key={id}>
            <img src={image} alt="" />
          </div>
        );
      })}
    </>
  );
};

export default Coins;
