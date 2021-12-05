import React, { FC } from 'react';
import styles from './Button.module.css';

interface IProps {
  text: string;
  onClick?: () => void;
}

const Button: FC<IProps> = (props) => {
  const { text, onClick } = props;

  return (
    <button className={styles.button} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
