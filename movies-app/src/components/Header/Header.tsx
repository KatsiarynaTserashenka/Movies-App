import React, { FC } from 'react';
import styles from './Header.module.css';

interface IProps {
  children: React.ReactNode;
}

const Header: FC<IProps> = (props) => {
  const { children } = props;

  return <header className={styles.header}>{children}</header>;
};

export default Header;
