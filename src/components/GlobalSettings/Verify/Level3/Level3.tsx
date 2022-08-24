import cn from 'classnames';

import Document from '../../Document/Document';

import styles from './level3.module.scss';

const Level3 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <p className={styles.error}>
          Please complete level one verification first.
        </p>
        <p className={styles.text}>
          Please upload supporting documentation for your Source of Funds and
          Proof of Address. Documents lying on a flat surface must show all 4
          corners and all information should be clear and identifiable.
        </p>
        <p className={styles.description}>
          Following file types are accepted: .png, .jpg, .pdf
        </p>
        <div className={styles.item}>
          <Document title="Source of Funds" />
        </div>
        <div className={styles.item}>
          <Document title="Proof of Address" />
        </div>
        <div className={cn(styles.button, 'button button-sm')}>Upload</div>
      </div>
    </div>
  );
};

export default Level3;
