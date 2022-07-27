import { FC } from 'react';
import Link from 'next/link';
import styles from './game.module.scss';

import TooltipIcon from '../../assets/images/icons/tooltip.svg';
import PlayIcon from '../../assets/images/icons/play.svg';

interface IProps {
  title: string;
  image: string;
  url: string;
  edge: string;
  coomigSoon?: boolean;
}

const Game: FC<IProps> = ({ title, image, url, edge, coomigSoon }) => {
  return (
    <Link href={url}>
      <a className={styles.content}>
        <div className={styles.block}>
          <div className={styles.image}>
            <img src={image} alt="" />
          </div>
          <div className={styles.edge}>{edge}</div>
          <div className={styles.play}>
            <PlayIcon />
          </div>
        </div>
        <div className={styles.bottom}>
          <h4 className={styles.title}>{title}</h4>
          <div className={styles.tooltip}>
            <span className={styles.icon}>
              <TooltipIcon />
            </span>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default Game;
