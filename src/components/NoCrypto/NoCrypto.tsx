import Link from 'next/link';
import cn from 'classnames';

import styles from './noCrypto.module.scss';

import BuyCryptoIcon from '../../assets/images/icons/icon-buyCrypto.svg';

const NoCrypto = () => {
  return (
    <div className={styles.container}>
      <div className={styles.block}>
        <h2 className={cn('title-section')}>No Crypto? No problem.</h2>
        <Link href="/">
          <a className={cn('button button-border button-sm', [styles.button])}>
            Buy Crypto
            <span className={cn('icon', styles.icon)}>
              <BuyCryptoIcon />
            </span>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default NoCrypto;
