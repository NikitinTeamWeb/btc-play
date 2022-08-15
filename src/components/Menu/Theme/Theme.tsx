import ModeColor from '../../ModeColor/ModeColor';

import styles from './theme.module.scss';

const Theme = () => {
  return (
    <div className={styles.block}>
      <p className={styles.label}>Theme</p>
      <div className={styles.main}>
        <ModeColor />
        <p className={styles.text}>Night</p>
      </div>
    </div>
  );
};

export default Theme;
