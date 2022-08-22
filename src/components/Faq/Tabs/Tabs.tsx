import { FC } from 'react';
import cn from 'classnames';

import styles from './tabs.module.scss';

interface IProp {
  id: number;
  title: string;
}

interface IProps {
  setIsActiveCatagery: (val: number) => void;
  isActiveCatagery: number;
  faqList: Array<IProp>;
}

const Tabs: FC<IProps> = ({
  faqList,
  isActiveCatagery,
  setIsActiveCatagery,
}) => {
  const handleActiveCategory = (value: number) => {
    setIsActiveCatagery(value);
  };

  return (
    <div className={styles.tabs}>
      {faqList.map(({ id, title }) => {
        return (
          <div
            className={cn(styles.tab, {
              [styles.active]: isActiveCatagery == id,
            })}
            key={id}
            onClick={() => handleActiveCategory(id)}
          >
            {title}
          </div>
        );
      })}
    </div>
  );
};

export default Tabs;
