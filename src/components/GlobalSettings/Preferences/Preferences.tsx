import cn from 'classnames';

import Checkbox from '../../Checkbox/Checkbox';
import styles from './preferences.module.scss';

const Preferences = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={cn(styles.block, styles.password)}>
          <h2 className={styles.title}>Password</h2>
          <div className={styles.item}>
            <Checkbox name="ex1">Hide your bets (ghost mode)</Checkbox>
          </div>
          <div className={styles.item}>
            <Checkbox name="ex2">Hide all your player statistics</Checkbox>
          </div>
          <div className={styles.item}>
            <Checkbox name="ex3">Hide your race stats</Checkbox>
          </div>
          <div className={styles.item}>
            <Checkbox name="ex4">SMS opt out</Checkbox>
          </div>
          <div className={cn(styles.button, 'button button-sm')}>
            Save change
          </div>
        </div>
        <div className={cn(styles.block, styles.twoFactor)}>
          <h2 className={styles.title}>Two Factor</h2>
          <div className={styles.item}>
            <Checkbox name="ex5">Prevent yourself from receiving rain</Checkbox>
          </div>
          <div className={cn(styles.button, 'button button-sm')}>
            Save change
          </div>
        </div>
        <div className={cn(styles.block, styles.exclusion)}>
          <h2 className={styles.title}>Exclusion</h2>
          <p className={styles.text}>
            Need a break from Stake? To start the automated self exclusion
            process, please click the button below to receive confirmation
            instructions via email.
          </p>
          <div className={cn(styles.button, styles.red, 'button button-sm')}>
            Request Self Exclusion
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preferences;
