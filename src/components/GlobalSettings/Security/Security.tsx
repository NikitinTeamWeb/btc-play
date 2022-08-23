import cn from 'classnames';

import styles from './security.module.scss';

import QRcode from '../../../assets/images/globalSettings/qrcode.png';

const Security = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.block}>
          <h2 className={styles.title}>Password</h2>
          <div className={cn('default-input', styles.item)}>
            <label>Old password</label>
            <input type="password" placeholder="Enter old password" />
          </div>
          <div className={cn('default-input', styles.item)}>
            <label>New password</label>
            <input type="password" placeholder="Enter new password" />
          </div>
          <div className={cn('default-input', styles.item)}>
            <label>Confirm new Password</label>
            <input type="password" placeholder="Enter new password" />
          </div>
          <div className={cn(styles.button, 'button button-sm')}>
            Save change
          </div>
        </div>
        <div className={styles.block}>
          <h2 className={styles.title}>Phone</h2>
          <div className={cn('default-input copy', styles.item)}>
            <label>Copy this code to your authenticator app</label>
            <input
              type="text"
              value="AFSDGHDHRFRET3FDFGVBXFTHDRYHGSE5TS"
              readOnly
            />
          </div>
          <div className={styles.qrcode}>
            <p className={styles.text}>Don't let anyone see this!</p>
            <div className={styles.image}>
              <img src={QRcode.src} alt="" />
            </div>
          </div>
          <div className={cn('default-input', styles.item)}>
            <label>Two factor code</label>
            <input type="password" placeholder="Enter new password" />
          </div>
          <div className={cn('default-input', styles.item)}>
            <label>Enter password</label>
            <input type="password" placeholder="Enter new password" />
          </div>
          <div className={cn(styles.button, 'button button-sm')}>Enable</div>
        </div>
      </div>
    </div>
  );
};

export default Security;
