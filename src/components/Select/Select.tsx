import { useState, useEffect, useRef } from 'react';
import cn from 'classnames';
import { Trans } from '@lingui/macro';
// import useMediaQuery from 'components/useMediaQuery';
import Options from './Options/Options';
import ArrowDownIcon from '../../assets/images/icons/icon_dropdown.svg';
// import SortImage from 'images/icons/sort.svg';
// import ArrowLeft from 'images/icons/chevron-left.svg';
// import Check from 'images/icons/checkbox-check-white.svg';

import styles from './select.module.scss';

interface IProps {
  choosedType: string;
  onChange: (val: string, title: string, icon: string) => void;
  options: Array<Option>;
  placeholder?: string;
  title: string;
  icon?: string;
  style?: string;
}

type Option = {
  title: string;
  value: string;
};

const Select: React.FC<IProps> = ({
  choosedType,
  onChange,
  options,
  placeholder,
  title,
  style,
  icon,
}) => {
  const [isOpen, setOpen] = useState<boolean>(false);
  // const isMobile = useMediaQuery(767);
  const sortingMenu = useRef<HTMLDivElement>();

  const handleClickOutside = (e) => {
    if (sortingMenu && !sortingMenu.current.contains(e.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('fixed');
    } else {
      document.body.classList.remove('fixed');
    }

    return () => {
      document.body.classList.remove('fixed');
    };
  }, [isOpen]);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div
      className={cn(styles.select, {
        [styles.opened]: isOpen,
        [styles[style || '']]: style,
      })}
      ref={sortingMenu}
    >
      <div className={styles.title} onClick={() => setOpen((prev) => !prev)}>
        <div className={styles['desktop-title']}>
          {icon && (
            <span className={styles.icon}>
              <img src={icon} alt="" />{' '}
            </span>
          )}
          {title ? title : placeholder}
        </div>

        <div className={cn(styles.arrow, { [styles.rotate]: isOpen })}>
          <ArrowDownIcon />
        </div>
      </div>
      <div className={cn(styles.content, { [styles.hidden]: !isOpen })}>
        <div className={styles['mobile-select']}>
          <div className={styles.back} onClick={() => setOpen(false)}>
            {/* <ArrowLeft /> */}
          </div>
          <h3 className={styles.title}>{placeholder}</h3>
          <span className={styles.btn} onClick={() => setOpen(false)}>
            {/* <Check /> */}
          </span>
        </div>
        <Options
          options={options}
          choosedType={choosedType}
          onChange={onChange}
          handleClose={() => {
            setOpen(false);
          }}
        />
      </div>
    </div>
  );
};

export default Select;
