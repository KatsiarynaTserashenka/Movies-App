import React, { FC } from 'react';
import styles from './Footer.module.css';

interface IProps {
  children: React.ReactNode;
}

const Footer: FC<IProps> = (props) => {
  const { children } = props;

  return <footer className={styles.footer}>{children}</footer>;
};

export default Footer;
