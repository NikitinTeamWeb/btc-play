import { useState } from 'react';
import cn from 'classnames';

import { faqList } from './faqList';
import Tabs from './Tabs/Tabs';
import Block from './Blocks/Block';

import styles from './faq.module.scss';

const Faq = () => {
  const [isActiveCatagery, setIsActiveCatagery] = useState(0);

  return (
    <div className={styles.container}>
      <div className={styles.block}>
        <h4 className={styles.description}>FAQ</h4>
        <h1 className={cn('title-section', styles.title)}>
          Frequently Asked <br /> Questions
        </h1>
      </div>
      <Tabs
        faqList={faqList}
        setIsActiveCatagery={setIsActiveCatagery}
        isActiveCatagery={isActiveCatagery}
      />

      <div className={styles.blocks}>
        {faqList.map(
          ({ id, items }) =>
            isActiveCatagery === id && (
              <div className={styles.bottom} key={id}>
                {items.map(({ id, title, text }) => (
                  <Block key={id} title={title} text={text} />
                ))}
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default Faq;
