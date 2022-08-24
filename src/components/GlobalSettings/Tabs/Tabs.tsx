import { FC, useMemo, useState, useEffect } from 'react';
import cn from 'classnames';

import styles from './tabs.module.scss';

interface IProp {
  id: number;
  title: string;
  icon: any;
  message?: string;
}

interface IProps {
  setIsActiveCatagery: (val: number) => void;
  setIsStatus: (val: string) => void;
  isActiveCatagery: number;
  helpList: Array<IProp>;
}

const Tabs: FC<IProps> = ({
  setIsActiveCatagery,
  setIsStatus,
  isActiveCatagery,
  helpList,
}) => {
  const [isActive, setIsActive] = useState(0);

  const handleActiveCategory = (value: number) => {
    setIsActive(value);
  };

  useEffect(() => {
    setIsActiveCatagery(isActive);
  }, [isActive]);

  useEffect(() => {
    setIsActive(isActiveCatagery);
  }, []);

  useEffect(() => {
    // @ts-ignore: Unreachable code error
    helpList[isActive].message
      ? // @ts-ignore: Unreachable code error
        setIsStatus(helpList[isActive].message)
      : setIsStatus('');
  }, [isActive]);

  return (
    <>
      {helpList.map(({ id, title, icon, message }) => {
        return (
          <div
            className={cn(styles.tab, {
              [styles.active]: isActiveCatagery == id,
            })}
            key={id}
            onClick={() => handleActiveCategory(id)}
          >
            <span className={styles.icon}>{icon}</span>
            {title}
          </div>
        );
      })}
    </>
  );
};

export default Tabs;
