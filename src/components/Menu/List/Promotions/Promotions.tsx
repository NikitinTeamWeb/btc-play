import { useMemo, FC, useState } from 'react';
import cn from 'classnames';

import styles from './promotions.module.scss';

import Icon1 from '../../../../assets/images/menu/icon_Promotions_01.png';
import Icon2 from '../../../../assets/images/menu/icon_Promotions_02.png';
import Icon3 from '../../../../assets/images/menu/icon_Promotions_03.png';
import Icon4 from '../../../../assets/images/menu/icon_Promotions_04.png';
import Icon5 from '../../../../assets/images/menu/icon_Promotions_05.png';
import Icon6 from '../../../../assets/images/menu/icon_Promotions_06.png';

interface IProps {
  isCloseMenu: boolean;
}

const Promotions: FC<IProps> = ({ isCloseMenu }) => {
  const [isActiveBlock, setIsActiveBlock] = useState(0);
  const [isOpenBlocks, setisOpenBlocks] = useState(false);

  const promotionList = useMemo(
    () => [
      {
        id: 0,
        icon: Icon1.src,
        status: true,
      },
      {
        id: 1,
        icon: Icon2.src,
        status: true,
      },
      {
        id: 2,
        icon: Icon3.src,
        status: true,
      },
      {
        id: 3,
        icon: Icon4.src,
        status: false,
      },
      {
        id: 4,
        icon: Icon5.src,
        status: true,
      },
      {
        id: 5,
        icon: Icon6.src,
        status: false,
      },
    ],
    []
  );

  const changeStateMenu = () => {
    setisOpenBlocks((prev) => !prev);
  };

  const changeActiveBlock = (id: number) => {
    setIsActiveBlock(id);
    changeStateMenu();
  };

  return (
    <div
      className={cn(
        styles.container,
        { [styles.closeMenu]: isCloseMenu },
        { [styles.openBlocks]: isOpenBlocks && isCloseMenu }
      )}
    >
      <div className={styles.blocks}>
        {promotionList.map(({ id, icon, status }) => {
          return (
            <div
              className={cn(styles.block, {
                [styles.closed]: !status,
                [styles.mainBlock]: isActiveBlock == id,
              })}
              key={id}
              onClick={() => {
                if (isCloseMenu) {
                  isActiveBlock == id
                    ? changeStateMenu()
                    : changeActiveBlock(id);
                }
              }}
            >
              <img src={icon} alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Promotions;
