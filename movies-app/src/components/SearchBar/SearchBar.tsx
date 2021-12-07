import React, { FC } from 'react';
import styles from './SearchBar.module.css';

interface IProps {
  children: React.ReactNode;
}

const SearchBar: FC<IProps> = (props) => {
  const { children } = props;

  return <div className={styles.searchBar}>{children}</div>;
};

export default SearchBar;
