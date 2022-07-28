import styles from './buttonTop.module.scss';

import ArrowTop from '../../assets/images/icons/arrow-top.svg';

const ButtonTop = () => {
  return (
    <div className={styles.block}>
      Top
      <span className={styles.icon}>
        <ArrowTop />
      </span>
    </div>
  );
};

export default ButtonTop;
