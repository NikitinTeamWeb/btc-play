import ModeColor from '../../ModeColor/ModeColor';

import styles from './theme.module.scss';

const Theme = () => {
  return (
    <div className={styles.block}>
      <p className={styles.label}>Theme</p>
      <ModeColor />
    </div>
  );
};

export default Theme;
