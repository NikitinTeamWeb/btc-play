import { useMemo, FC, useState } from 'react';
import cn from 'classnames';
import Sorting from '../../Sorting/Sorting';

import styles from './language.module.scss';

import EnglichIcon from '../../../assets/images/menu/english.png';

interface IProps {
  isCloseMenu: boolean;
}

const Language: FC<IProps> = ({ isCloseMenu }) => {
  const [isOpenLangSelect, setIsOpenLangSelect] = useState(false);

  const languageList = useMemo(
    () => [
      {
        id: 0,
        icon: EnglichIcon.src,
        title: `English`,
        value: 'EN',
        activeLanguage: false,
      },
      {
        id: 1,
        icon: EnglichIcon.src,
        title: `French`,
        value: 'FR',
        activeLanguage: true,
      },
      {
        id: 2,
        icon: EnglichIcon.src,
        title: `Polish`,
        value: 'PL',
        activeLanguage: false,
      },
      {
        id: 3,
        icon: EnglichIcon.src,
        title: `Spanish`,
        value: 'SP',
        activeLanguage: false,
      },
    ],
    []
  );

  return (
    <div className={cn(styles.block, { [styles.closeMenu]: isCloseMenu })}>
      {!isCloseMenu ? (
        <>
          <p className={styles.label}>Change language</p>
          <Sorting options={languageList} style="grey" />
        </>
      ) : (
        <>
          {languageList
            .filter((language) => language.activeLanguage == true)
            .map((filteredLang) => (
              <p
                className={styles.description}
                onClick={() => setIsOpenLangSelect(true)}
              >
                {filteredLang.value}
              </p>
            ))}
          <div
            className={cn(styles.select, { [styles.show]: isOpenLangSelect })}
          >
            <Sorting options={languageList} style="greySmall" />
          </div>
        </>
      )}
    </div>
  );
};

export default Language;
