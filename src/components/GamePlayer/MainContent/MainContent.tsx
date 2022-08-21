import { useEffect, FC } from 'react';
import cn from 'classnames';
import styles from './mainContent.module.scss';

import PlayIcon from '../../../assets/images/icons/play.svg';

interface IProps {
  isActive: string;
}

const MainContent: FC<IProps> = ({ isActive }) => {
  useEffect(() => {
    console.log(isActive);
  }, [isActive]);
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        Вход в стороннюю игру. Баланс выбранной валюты будет отображаться в
        долларах США, и если вы измените валюту во время игры, игра обновится и
        перезагрузится.
      </div>
      <div className={styles.buttons}>
        <div
          className={cn(styles.button, {
            [styles.active]: isActive === 'real',
          })}
        >
          <span className={styles.play}>
            <PlayIcon />
          </span>
          Real Play
        </div>
        <div
          className={cn(styles.button, {
            [styles.active]: isActive === 'fun',
          })}
        >
          <span className={styles.play}>
            <PlayIcon />
          </span>
          Fun Play
        </div>
      </div>
    </div>
  );
};

export default MainContent;
