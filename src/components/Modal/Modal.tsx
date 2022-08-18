import React, { ReactNode, useState, FC } from 'react';
import classnames from 'classnames';
import Modal from 'react-modal';

import styles from './modal.module.scss';

import Close from '../../assets/images/icons/close.svg';

interface IProps {
  isOpen: boolean;
  onClose: () => void;
  maxWidth: string;
  children: ReactNode;
}

const ModalLayout: FC<IProps> = ({ isOpen, onClose, maxWidth, children }) => {
  const modalStyles = {
    overlay: {
      background: 'rgba(34, 26, 35, 0.74)',
      zIndex: '10',
    },
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      transform: 'translate(-50%, -50%)',
      background: 'transparent',
      border: 'none',
      width: '100%',
      padding: '20px 10px',
      maxWidth: maxWidth || '100%',
      maxHeight: '97%',
    },
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={modalStyles}
      ariaHideApp={false}
    >
      <div className={styles.close} onClick={onClose}>
        <Close />
      </div>
      {children}
    </Modal>
  );
};

export default ModalLayout;
