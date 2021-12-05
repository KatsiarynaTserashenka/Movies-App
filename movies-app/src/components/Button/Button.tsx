import React, { FC } from 'react';
import styles from './Button.module.css';
import classNames from 'classnames/bind';
import { type } from 'os';

let cx = classNames.bind(styles);

interface IProps {
  text: string;
  onClick?: () => void;
  searchButton?: boolean;
}

const Button: FC<IProps> = (props) => {
  const { text, onClick, searchButton } = props;

  return (
    <button
      className={cx({
        button: true,
        searchButton: searchButton,
      })}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
