import { useState } from 'react';
import cn from 'classnames';

import styles from './security.module.scss';

import QRcode from '../../../assets/images/globalSettings/qrcode.png';
import CopyIcon from '../../../assets/images/globalSettings/copy.svg';

const Security = () => {
  const copyText = 'AFSDGHDHRFRET3FDFGVBXFTHDRYHGSE5TS';
  const [isCopied, setIsCopied] = useState(false);

  async function copyTextToClipboard(text: any) {
    if ('clipboard' in navigator) {
      return await navigator.clipboard.writeText(text);
    } else {
      return document.execCommand('copy', true, text);
    }
  }

  const handleCopyClick = () => {
    copyTextToClipboard(copyText)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 1500);
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
            <div className="copy">
              <input type="text" value={copyText} readOnly />
              <span onClick={handleCopyClick}>
                <CopyIcon />
              </span>
            </div>
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
