import { FC, useState, useEffect } from 'react';
import Link from 'next/link';

import Toggle from './Toggle/Toggle';
import Block from './Block/Block';

import styles from './gamePlayer.module.scss';

const Game = () => {
  const [isActive, setIsActive] = useState('real');

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h3 className={styles.description}>Slots</h3>
          <div className={styles.infoBlock}>
            <h1 className={styles.name}>Razor Shark</h1>
            <p className={styles.by}>
              By <span>GameArt</span>
            </p>
          </div>
        </div>
        <div className={styles.toggle}>
          <Toggle isActive={isActive} setIsActive={setIsActive} />
        </div>
      </div>
      <div className={styles.main}>
        <Block isActive={isActive} />
      </div>
    </div>
  );
};

export default Game;
