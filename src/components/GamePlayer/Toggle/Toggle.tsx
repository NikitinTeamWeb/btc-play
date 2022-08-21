import { FC, useState, useEffect } from 'react';
import cn from 'classnames';
import styles from './toggle.module.scss';
import { useSwiper } from 'swiper/react';

interface IProps {
  isActive: string;
  setIsActive: (val: string) => void;
}

const Toggle: FC<IProps> = ({ isActive, setIsActive }) => {
  const [isChecked, setIsChecked] = useState(
    isActive === 'real' ? false : true || true
  );

  const handleChange = (event: boolean) => {
    setIsActive(event === true ? 'fun' : 'real');
  };

  useEffect(() => {
    setIsChecked(isActive === 'real' ? false : true || true);
  }, [isActive]);

  return (
    <div className={styles.container}>
      <input
        type="checkbox"
        id="ex"
        checked={isChecked}
        onChange={(event) => handleChange(event.target.checked)}
      ></input>
      <label className={styles.label} htmlFor="ex">
        <p>Real play</p>
        <span className={styles.block}></span>
        <p>Fun play</p>
      </label>
    </div>
  );
};

export default Toggle;
