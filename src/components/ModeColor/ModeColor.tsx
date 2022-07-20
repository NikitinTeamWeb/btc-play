import styles from './modeColor.module.scss';

const ModeColor = () => {
  return (
    <div className={styles.container}>
      <input type="checkbox" id="mode"></input>
      <label className={styles.label} htmlFor="mode">
        <span className={styles.block}></span>
      </label>
    </div>
  );
};

export default ModeColor;
