import { useMemo, useState } from 'react';
import Link from 'next/link';
import cn from 'classnames';

import Sorting from '../../Sorting/Sorting';
import Modal from '../../Modal/Modal';
import VerificationModal from '../../VerificationModal/VerificationModal';

import styles from './general.module.scss';

const General = () => {
  const [isOpenVerification, setIsOpenVerification] = useState(false);

  const options = useMemo(
    () => [
      {
        title: `+1 Canada`,
        value: 'canada',
      },
      {
        title: `+1 Canada`,
        value: 'canada2',
      },
      {
        title: `+1 Canada`,
        value: 'canada3',
      },
      {
        title: `+1 Canada`,
        value: 'canada4',
      },
    ],
    []
  );

  const openVerification = () => {
    setIsOpenVerification(true);
  };

  const closeVerification = () => {
    setIsOpenVerification(false);
  };
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.block}>
          <h2 className={styles.title}>Email</h2>
          <div className={cn('default-input', styles.item)}>
            <label>Email</label>
            <input type="email" placeholder="Registered email address" />
          </div>
        </div>
        <div className={styles.block}>
          <h2 className={styles.title}>Phone</h2>
          <div className={cn('default-input select', styles.item)}>
            <label>Country Code</label>
            <div className={styles.select}>
              <Sorting options={options} style="grey" />
            </div>
          </div>
          <div className={cn('default-input ', styles.item)}>
            <label>Phone number</label>
            <input type="text" value="125252523" />
          </div>
          <div className={styles.buttons}>
            <Link href="#">
              <a className={cn(styles.button, 'button button-sm')}>Resend</a>
            </Link>

            <div
              className={cn(styles.button, 'button button-border button-sm')}
              onClick={openVerification}
            >
              Verify
            </div>
          </div>
          <p className={styles.description}>
            Disclaimer: We only service areas that are listed in the available
            country code list.
          </p>
        </div>
      </div>
      <Modal
        isOpen={isOpenVerification}
        onClose={closeVerification}
        maxWidth="500px"
      >
        <VerificationModal />
      </Modal>
    </div>
  );
};

export default General;
