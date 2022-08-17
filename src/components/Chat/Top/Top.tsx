import { FC } from 'react';
import styles from './top.module.scss';

import Language from '../../Language/Language';

import CupIcon from '../../../assets/images/chat/cup.svg';
import InformationIcon from '../../../assets/images/icons/tooltip.svg';
import CloseIcon from '../../../assets/images/chat/close.svg';

interface IProps {
  setIsOpenChat: (val: boolean) => void;
}

const Top: FC<IProps> = ({ setIsOpenChat }) => {
  return (
    <div className={styles.content}>
      <div className={styles.language}>
        <Language isChat={true} />
      </div>
      <div className={styles.information}>
        <InformationIcon />
      </div>
      <div className={styles.cup}>
        <CupIcon />
      </div>
      <div className={styles.close} onClick={() => setIsOpenChat(false)}>
        <CloseIcon />
      </div>
    </div>
  );
};
export default Top;
