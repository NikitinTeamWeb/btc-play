import { useState, useEffect } from 'react';
import { Trans } from '@lingui/macro';
import cn from 'classnames';
import ReactPaginate from 'react-paginate';
import styles from './pagination.module.scss';

import Arrow from 'images/icons/arrow-left.svg';
import Rotate from 'images/icons/rotate.svg';

interface IProps {
  current: number;
  size: number;
  total: number;
  onChange: (any) => void;
  onShowMore: (any) => void;
}

const Pagination: React.FC<IProps> = ({
  current,
  size,
  total,
  onChange,
  onShowMore,
}) => {
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    setPageCount(Math.ceil(total / size));
  }, [total, size]);

  // const handlePageClick = (event: any) => {
  //   const newOffset = (event.selected * itemsPerPage) % items.length;
  //   setItemOffset(newOffset);
  // };

  if (total <= size) {
    return <></>;
  }

  return (
    <div className={styles.pagination}>
      {current < pageCount && (
        <div className={styles.more} onClick={onShowMore}>
          <Rotate />{' '}
          <span>
            <Trans>Показати ще</Trans>
          </span>
        </div>
      )}

      <ReactPaginate
        nextLabel={<Arrow />}
        onPageChange={onChange}
        pageCount={pageCount}
        forcePage={current - 1}
        pageRangeDisplayed={2}
        marginPagesDisplayed={1}
        previousLabel={<Arrow />}
        pageClassName={styles.btn}
        previousClassName={styles.left}
        previousLinkClassName={styles.arrow}
        nextClassName={styles.right}
        nextLinkClassName={cn(styles.arrow, styles['arrow-right'])}
        breakLabel="..."
        breakClassName={styles.btn}
        containerClassName={styles.btns}
        activeClassName={styles.active}
        renderOnZeroPageCount={null}
        disabledClassName={styles.disabled}
      />
    </div>
  );
};

export default Pagination;
