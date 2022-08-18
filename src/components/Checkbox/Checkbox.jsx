import React from "react";

import styles from "./Checkbox.module.scss";

const Checkbox = ({ name, children }) => {
  return (
    <div className={styles.checkbox}>
      <input type="checkbox" id={name} />
      <label htmlFor={name} className={styles.label}>
        <div className={styles.block}></div>
        <div className={styles.text}>{children}</div>
      </label>
    </div>
  );
};

export default Checkbox;
