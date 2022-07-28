import cn from 'classnames';
import Link from 'next/link';

import WinnerImg from '../../assets/images/main/winner-img.png';
import Table from './Table/Table';

import styles from './winner.module.scss';

const Winner = () => {
  return (
    <div className={styles.container}>
      <div className={styles.block}>
        <div className={styles.info}>
          <h2 className={cn('title-section', styles.title)}>
            Winner Winner Chicken Dinner
          </h2>
          <Link href="/">
            <a className={cn(styles.button, 'button button-sm')}>Play now</a>
          </Link>
        </div>
        <div className={styles.image}>
          <img src={WinnerImg.src} alt="" />
        </div>
        <div className={styles.table}>
          <div className={styles.tableBlock}>
            <Table />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Winner;
