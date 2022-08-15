import { FC } from 'react';
import cn from 'classnames';
import Link from 'next/link';

import styles from './socials.module.scss';

import Discord from '../../../assets/images/icons/social_Discord.svg';
import Facebook from '../../../assets/images/icons/social_Facebook.svg';
import Telegram from '../../../assets/images/icons/social_Telegram.svg';
import Twitter from '../../../assets/images/icons/social_Twitter.svg';

interface IProps {
  isCloseMenu: boolean;
}

const Socials: FC<IProps> = ({ isCloseMenu }) => {
  const socialsList = [
    {
      id: 0,
      url: '/',
      icon: <Telegram />,
    },
    {
      id: 1,
      url: '/',
      icon: <Twitter />,
    },
    {
      id: 2,
      url: '/',
      icon: <Facebook />,
    },
    {
      id: 3,
      url: '/',
      icon: <Discord />,
    },
  ];

  return (
    <div className={cn(styles.block, { [styles.closeMenu]: isCloseMenu })}>
      {!isCloseMenu && (
        <h4 className={styles.title}>Official social networks</h4>
      )}

      <div className={styles.links}>
        {socialsList.map(({ id, icon, url }) => {
          return (
            <Link href={url} key={id}>
              <a className={styles.link}>{icon}</a>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Socials;
