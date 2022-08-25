import { useState } from 'react';
import cn from 'classnames';
import Link from 'next/link';
import styles from './verificationModal.module.scss';
import ReactCodeInput from 'react-code-input';

const VerificationModal = () => {
  const [valueInput, setValueInput] = useState(false);
  const [valid, setValid] = useState(true);

  const handleValueInput = (e: any) => {
    if (String(e).replace(/[A-Za-z]/g, '').length === 6) {
      setValueInput(true);
      if (e !== '222222') {
        setValid(false);
      } else {
        setValid(true);
      }
    } else {
      setValueInput(false);
    }
  };
  return (
    <div className={styles.contanier}>
      <h3 className={styles.title}>Verify Phone</h3>

      <p className={styles.description}>Verification code</p>
      <ReactCodeInput
        name="resetPassword"
        inputMode="numeric"
        fields={6}
        type="text"
        onChange={(e) => handleValueInput(e)}
        isValid={valid}
        className={styles.inputs}
      />
      <Link href="#">
        <a className={cn(styles.button, 'button button-sm')}>Enable</a>
      </Link>
    </div>
  );
};

export default VerificationModal;
