import { FC, useEffect, useState } from 'react';

import styles from './timer.module.scss';

import DotsIcon from '../../assets/images/icons/dots.svg';

interface IProps {
  timer: number;
}

const Timer: FC<IProps> = ({ timer }) => {
  const [hours, setHours] = useState<string>('');
  const [minutes, setMinutes] = useState<string>('');
  const [seconds, setSeconds] = useState<string>('');

  const [count, setCount] = useState<string>('');
  const [alert, setAlert] = useState<boolean>(false);
  const countDownDate = new Date(timer * 1000);

  useEffect(() => {
    const countDown = setInterval(function () {
      const now = new Date().getTime();

      const distance = Number(countDownDate) - now;

      const hours = Math.floor(distance / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (hours < 1) {
        setAlert(true);
      }

      setCount(
        `${hours < 10 ? '0' + hours : hours}:${
          minutes < 10 ? '0' + minutes : minutes
        }:${seconds < 10 ? '0' + seconds : seconds}`
      );

      setHours(`${hours < 10 ? '0' + hours : hours}`);
      setMinutes(`${minutes < 10 ? '0' + minutes : minutes}`);
      setSeconds(`${seconds < 10 ? '0' + seconds : seconds}`);

      if (distance < 0) {
        clearInterval(countDown);
        return setHours('00'), setMinutes('00'), setSeconds('00');
      }
    }, 1000);
    return () => {
      clearInterval(countDown);
    };
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.blocks}>
          <div className={styles.block}>{hours[0]}</div>
          <div className={styles.block}>{hours[1]}</div>
        </div>
        <p className={styles.description}>Hours</p>
      </div>
      <div className={styles.dots}>
        <DotsIcon />
      </div>
      <div className={styles.item}>
        <div className={styles.blocks}>
          <div className={styles.block}>{minutes[0]}</div>
          <div className={styles.block}>{minutes[1]}</div>
        </div>
        <p className={styles.description}>Minutes</p>
      </div>
      <div className={styles.dots}>
        <DotsIcon />
      </div>
      <div className={styles.item}>
        <div className={styles.blocks}>
          <div className={styles.block}>{seconds[0]}</div>
          <div className={styles.block}>{seconds[1]}</div>
        </div>
        <p className={styles.description}>Seconds</p>
      </div>
    </div>
  );
};

export default Timer;
