import React, { FC } from 'react';
import styles from './Checkbox.module.css';
import classNames from 'classnames/bind';

let cx = classNames.bind(styles);

interface MyProps {
  text: string;
  isChecked?: boolean;
  handleCheck?: (event: any) => void;
}
const Checkbox: FC<MyProps> = ({ text, isChecked, handleCheck }) => {
  return (
    <div>
      <label className={styles.checkbox}>
        <input
          type="checkbox"
          onChange={handleCheck}
          checked={isChecked}
          className={styles.checkboxInput}
        ></input>
        <span
          className={cx({
            checkboxText: true,
            checked: isChecked,
          })}
        >
          {text}
        </span>
      </label>
    </div>
  );
};

export default Checkbox;
