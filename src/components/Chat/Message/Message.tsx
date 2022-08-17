import { FC } from 'react';
import cn from 'classnames';
import styles from './message.module.scss';

import Avatar from '../../../assets/images/chat/avatar.png';
import Star from '../../../assets/images/chat/star.svg';
import Image from '../../../assets/images/chat/image.png';

interface IProps {
  props: IProp;
}

interface IProp {
  avatar: string;
  description: string;
  stars: number;
  name: string;
  time: string;
  color: string;
  messages: Array<IItem>;
}

interface IItem {
  text?: string;
  gif?: string;
}

const Message: FC<IProps> = ({ props }) => {
  return (
    <div
      className={cn(styles.content, {
        [styles[props.color || '']]: props.color,
      })}
    >
      <div className={styles.avatar}>
        <img src={props.avatar} alt="" />
        <p className={styles.description}>{props.description}</p>
        <div className={styles.stars}>
          {[...Array(5)].map((e, i) => (
            <span
              className={cn(styles.star, {
                [styles.starActive]: i < props.stars,
              })}
            >
              <Star />
            </span>
          ))}
        </div>
      </div>
      <div className={styles.main}>
        <div className={styles.top}>
          <span className={styles.name}>{props.name}</span>
          <span className={styles.time}>{props.time}</span>
        </div>
        <div className={styles.block}>
          <p>
            Any big winner? Congratulations to the winners and good luck to the
            ones trying to win
          </p>
        </div>
        <div className={styles.block}>
          <p>
            <span className={styles.user}>@Losing125</span> have a good one ;)
          </p>
        </div>
        <div className={styles.block}>
          <span className={styles.gif}>
            <img src={Image.src} alt="" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Message;
