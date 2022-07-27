import { FC } from 'react';

import styles from './pagination.module.scss';

interface IButtonProps {
  extStyles?: object;
  extClassName?: string;
}

const Pagination: FC<IButtonProps> = ({ extClassName }) => {
  return (
    <div className={`swiper-pagination ${styles.pagination} ${extClassName}`} />
  );
};

export default Pagination;
