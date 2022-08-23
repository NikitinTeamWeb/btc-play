import { FC, useMemo, useState, useEffect } from 'react';
import cn from 'classnames';

import styles from './tabs.module.scss';

interface IProp {
  id: number;
  title: string;
  icon: any;
}

interface IProps {
  setIsActiveCatagery: (val: number) => void;
  isActiveCatagery: number;
  helpList: Array<IProp>;
}

const Tabs: FC<IProps> = ({
  setIsActiveCatagery,
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

  return (
    <>
      {helpList.map(({ id, title, icon }) => {
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
