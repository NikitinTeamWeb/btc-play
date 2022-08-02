import { useMemo } from 'react';
import cn from 'classnames';

import styles from './allBets.module.scss';

import BTC from '../../assets/images/footer/BTC-color.png';
import Dice from '../../assets/images/table/Dice.svg';

const AllBets = () => {
  const betsList = useMemo(
    () => [
      {
        id: 0,
        gameIcon: <Dice />,
        gameName: 'Dice',
        user: 'LordPinko',
        time: '1:22 PM',
        bet: '0.00134534',
        betIcon: BTC.src,
        multiplayer: '0.30x',
        payout: '-0.0000009822',
        payoutIcon: BTC.src,
      },
      {
        id: 1,
        gameIcon: <Dice />,
        gameName: 'Fire in The Hold',
        user: 'LordPinko',
        time: '1:22 PM',
        bet: '0.00134534',
        betIcon: BTC.src,
        multiplayer: '0.30x',
        payout: '-0.0000009822',
        payoutIcon: BTC.src,
      },
      {
        id: 2,
        gameIcon: <Dice />,
        gameName: 'Dice',
        user: 'LordPinko',
        time: '1:22 PM',
        bet: '0.00134534',
        betIcon: BTC.src,
        multiplayer: '0.30x',
        payout: '-0.0000009822',
        payoutIcon: BTC.src,
        payoutActive: true,
      },
      {
        id: 3,
        gameIcon: <Dice />,
        gameName: 'Dice',
        user: 'LordPinko',
        time: '1:22 PM',
        bet: '0.00134534',
        betIcon: BTC.src,
        multiplayer: '0.30x',
        payout: '-0.0000009822',
        payoutIcon: BTC.src,
      },
      {
        id: 4,
        gameIcon: <Dice />,
        gameName: 'Dice',
        user: 'LordPinko',
        time: '1:22 PM',
        bet: '0.00134534',
        betIcon: BTC.src,
        multiplayer: '0.30x',
        payout: '-0.0000009822',
        payoutIcon: BTC.src,
      },
      {
        id: 5,
        gameIcon: <Dice />,
        gameName: 'Dice',
        user: 'LordPinko',
        time: '1:22 PM',
        bet: '0.00134534',
        betIcon: BTC.src,
        multiplayer: '0.30x',
        payout: '-0.0000009822',
        payoutIcon: BTC.src,
      },
      {
        id: 6,
        gameIcon: <Dice />,
        gameName: 'Dice',
        user: 'LordPinko',
        time: '1:22 PM',
        bet: '0.00134534',
        betIcon: BTC.src,
        multiplayer: '0.30x',
        payout: '-0.0000009822',
        payoutIcon: BTC.src,
        payoutActive: true,
      },
      {
        id: 7,
        gameIcon: <Dice />,
        gameName: 'Dice',
        user: 'LordPinko',
        time: '1:22 PM',
        bet: '0.00134534',
        betIcon: BTC.src,
        multiplayer: '0.30x',
        payout: '-0.0000009822',
        payoutIcon: BTC.src,
      },
      {
        id: 8,
        gameIcon: <Dice />,
        gameName: 'Dice',
        user: 'LordPinko',
        time: '1:22 PM',
        bet: '0.00134534',
        betIcon: BTC.src,
        multiplayer: '0.30x',
        payout: '-0.0000009822',
        payoutIcon: BTC.src,
      },
      {
        id: 9,
        gameIcon: <Dice />,
        gameName: 'Dice',
        user: 'LordPinko',
        time: '1:22 PM',
        bet: '0.00134534',
        betIcon: BTC.src,
        multiplayer: '0.30x',
        payout: '-0.0000009822',
        payoutIcon: BTC.src,
      },
    ],
    []
  );

  return (
    <div className={styles.content}>
      <table>
        <thead>
          <tr>
            <th className={styles.game}>Game</th>
            <th className={styles.user}>User</th>
            <th className={styles.time}>Time</th>
            <th className={styles.bet}>Bet</th>
            <th className={styles.multiplayer}>Multiplayer</th>
            <th className={styles.payout}>Payout</th>
          </tr>
        </thead>
        <tbody>
          {betsList.map(
            ({
              id,
              gameIcon,
              gameName,
              user,
              time,
              bet,
              betIcon,
              multiplayer,
              payout,
              payoutIcon,
              payoutActive,
            }) => {
              return (
                <tr key={id}>
                  <td className={styles.game}>
                    {gameIcon}
                    {gameName}
                  </td>
                  <td className={styles.user}>{user}</td>
                  <td className={styles.time}>{time}</td>
                  <td className={styles.bet}>
                    {bet}
                    <img src={betIcon} alt="" />
                  </td>
                  <td className={styles.multiplayer}>{multiplayer}</td>
                  <td
                    className={cn(styles.payout, {
                      [styles.green]: payoutActive,
                    })}
                  >
                    {payout}
                    <img src={payoutIcon} alt="" />
                  </td>
                </tr>
              );
            }
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AllBets;
