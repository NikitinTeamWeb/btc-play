import { useMemo } from 'react';
import cn from 'classnames';
import styles from './options.module.scss';

interface IProps {
  options: Array<Option>;
  choosedType: string;
  onChange: (value: string, title: string) => void;
  handleClose: () => void;
}

type Option = {
  title: string;
  value: string;
};

const Options: React.FC<IProps> = ({
  options,
  choosedType,
  onChange,
  handleClose,
}) => {
  const renderedOptions = useMemo(() => {
    return options.map(({ title, value }) => {
      return (
        <div
          className={cn(styles.option, {
            [styles.selected]: choosedType === value,
          })}
          onClick={() => {
            onChange(value, title);
            handleClose();
          }}
          key={value}
        >
          {title}
        </div>
      );
    });
  }, [choosedType]);

  return <div className={styles.options}>{renderedOptions}</div>;
};

export default Options;
