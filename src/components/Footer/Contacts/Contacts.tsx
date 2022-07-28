import { useMemo } from 'react';
import Link from 'next/link';
import styles from './contacts.module.scss';

const Contacts = () => {
  const contactsList = useMemo(
    () => [
      {
        id: 0,
        title: 'Help center ',
        email: 'Help.btc.game',
        url: 'Help.btc.game',
      },
      {
        id: 1,
        title: 'Affiliate',
        email: 'Affiliate@btc.game',
        url: 'Affiliate@btc.game',
      },
      {
        id: 2,
        title: 'Support',
        email: 'Support@btc.game',
        url: 'Support@btc.game',
      },
      {
        id: 3,
        title: 'Business',
        email: 'Business@btc.game',
        url: 'Business@btc.game',
      },
    ],
    []
  );

  return (
    <>
      {contactsList.map(({ id, title, email, url }) => {
        return (
          <div className={styles.item} key={id}>
            <p className={styles.title}>{title}</p>
            <Link href={url}>
              <a className={styles.email}>{email}</a>
            </Link>
          </div>
        );
      })}
    </>
  );
};

export default Contacts;
