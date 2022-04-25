import { ReactNode, FC } from 'react';

import classnames from 'classnames';

import styles from './top.module.scss';

import SearchIcon from '../../../assets/images/icons/search.png';
import CloseIcon from '../../../assets/images/icons/close.png';

interface IProps {
  isActive: boolean;
  setIsActive: (val: boolean) => void;
  setIsActiveResults: (val: boolean) => void;
}

const Top: FC<IProps> = ({ isActive, setIsActive, setIsActiveResults }) => {
  function showResult() {
    setIsActiveResults(true);
  }

  function hideSearch() {
    setIsActive(false);
    setIsActiveResults(false);
  }

  return (
    <div className={classnames(styles.block, { [styles.active]: isActive })}>
      <div className={styles.button} onClick={() => setIsActive(true)}>
        <img src={SearchIcon.src} alt="" />
      </div>
      {isActive && (
        <>
          <input type="text" onChange={showResult} />
          <div className={styles.close} onClick={hideSearch}>
            <img src={CloseIcon.src} alt="" />
          </div>
        </>
      )}
    </div>
  );
};

export default Top;
