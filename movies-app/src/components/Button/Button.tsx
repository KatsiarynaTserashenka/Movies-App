import React, { FC } from 'react';
import styles from './Button.module.css';
import classNames from 'classnames/bind';

let cx = classNames.bind(styles);

interface IProps {
  text: string;
  onClick?: () => void;
  showMoreButton?: boolean;
}

const Button: FC<IProps> = (props) => {
  const { text, onClick, showMoreButton } = props;

  return (
    <button
      className={cx({
        button: true,
        showMoreButton: showMoreButton,
      })}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
