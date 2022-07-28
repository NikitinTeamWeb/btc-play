import { useMemo } from 'react';
import Link from 'next/link';

import styles from './links.module.scss';

const Links = () => {
  const linksList = useMemo(
    () => [
      {
        id: 0,
        title: 'Join Us',
        url: '/',
      },
      {
        id: 1,
        title: 'Support center',
        url: '/',
      },
      {
        id: 2,
        title: 'Terms of Use',
        url: '/',
      },
      {
        id: 3,
        title: 'FAQ',
        url: '/',
      },
      {
        id: 4,
        title: 'About Us',
        url: '/',
      },
      {
        id: 5,
        title: 'Privacy Policy',
        url: '/',
      },
      {
        id: 6,
        title: 'Forum',
        url: '/',
      },
      {
        id: 6,
        title: 'Awareness of Gaming',
        url: '/',
      },
      {
        id: 6,
        title: 'News',
        url: '/',
      },
    ],
    []
  );

  return (
    <>
      {linksList.map(({ id, title, url }) => {
        return (
          <Link href={url} key={id}>
            <a className={styles.link}>{title}</a>
          </Link>
        );
      })}
    </>
  );
};
export default Links;
