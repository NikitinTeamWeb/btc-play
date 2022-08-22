import { FC, useState } from 'react';
import cn from 'classnames';

import styles from './block.module.scss';

import IconDropdown from '../../../assets/images/faq/icon_dropdown.svg';

interface IProps {
  title: string;
  text: string;
}

const Block: FC<IProps> = ({ title, text }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={cn(styles.container, { [styles.active]: isActive })}>
      <div className={styles.top} onClick={() => setIsActive((prev) => !prev)}>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.icon}>
          <IconDropdown />
        </div>
      </div>
      {isActive && <p className={styles.text}>{text}</p>}
    </div>
  );
};
export default Block;
