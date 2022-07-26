import styles from './support.module.scss';

import SupportIcon from '../../../assets/images/icons/support.svg';

const Support = () => {
  return (
    <div className={styles.button}>
      <span className={styles.icon}>
        <SupportIcon />
      </span>
      Support chat
    </div>
  );
};

export default Support;
