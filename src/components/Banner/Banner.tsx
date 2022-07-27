import { FC } from 'react';
import Link from 'next/link';
import cn from 'classnames';

import styles from './banner.module.scss';

interface IProps {
  title: string;
  subtitle?: string;
  button: string;
  buttonBorder?: boolean;
  url: string;
  backgroundImage?: string;
  backgroundColor?: string;
  backgroundElement: string;
}

const Banner: FC<IProps> = ({
  title,
  subtitle,
  button,
  buttonBorder,
  url,
  backgroundImage,
  backgroundElement,
  backgroundColor,
}) => {
  const bannerBg = {
    backgroundColor: `${backgroundColor}`,
  };

  return (
    <div className={cn(styles.block, { [styles.lessPadding]: subtitle })}>
      <div className={styles.info}>
        {subtitle && <h4 className={styles.subtitle}>{subtitle} </h4>}
        <h3
          className={styles.title}
          dangerouslySetInnerHTML={{ __html: title }}
        ></h3>
        <Link href={url}>
          <a
            className={cn(styles.button, 'button button-sm', {
              'button-border': buttonBorder,
            })}
          >
            {button}
          </a>
        </Link>
      </div>
      <div className={styles.el}>
        <img src={backgroundElement} alt="" />
      </div>
      {backgroundColor ? (
        <div className={styles.bg} style={bannerBg}></div>
      ) : (
        <div className={styles.bg}>
          {backgroundImage && <img src={backgroundImage} alt="" />}
        </div>
      )}
    </div>
  );
};

export default Banner;
