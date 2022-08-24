import styles from './level2.module.scss';

const Level2 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <p className={styles.error}>
          Please complete level one verification first.
        </p>
        <p className={styles.text}>
          Please upload your Proof of Identity. All documents must be lying on a
          flat surface with all 4 corners inside the frame, and all information
          should be clear and identifiable. While screenshots of ID cards and
          Passport are acceptable, scanned documents are not.
        </p>
        <p className={styles.description}>
          Following file types are accepted: .png, .jpg, .pdf
        </p>
      </div>
    </div>
  );
};

export default Level2;
