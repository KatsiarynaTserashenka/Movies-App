import React, { FC, useState } from 'react';
import style from './Checkbox.module.css';

interface MyProps {
  text: string;
  isChecked?: boolean;
  handleCheck?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
const Checkbox: FC<MyProps> = ({ text, isChecked, handleCheck }) => {
  return (
    <div>
      <label className={style.checkbox}>
        <input
          type="checkbox"
          onChange={handleCheck}
          checked={isChecked}
        ></input>
        <span className={style.checkboxBtn}>{text}</span>
      </label>
    </div>
  );
};

export default Checkbox;
