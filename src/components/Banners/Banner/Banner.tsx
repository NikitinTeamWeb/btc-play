import { FC } from 'react';
import Link from 'next/link';
import cn from 'classnames';

import styles from './banner.module.scss';

interface IProps {
  title: string;
  button: string;
  url: string;
  background: string;
  backgroundElement: string;
}

const Banner: FC<IProps> = ({
  title,
  button,
  url,
  background,
  backgroundElement,
}) => {
  return (
    <>
      <div className={styles.info}>
        <h3
          className={styles.title}
          dangerouslySetInnerHTML={{ __html: title }}
        ></h3>
        <Link href={url}>
          <a className={cn(styles.button, 'button button-sm')}>{button}</a>
        </Link>
      </div>
      <div className={styles.el}>
        <img src={backgroundElement} alt="" />
      </div>
      <div className={styles.bg}>
        <img src={background} alt="" />
      </div>
    </>
  );
};

export default Banner;
