import React from 'react';
import styles from './Input.module.css';

interface IProps {
  placeholder: string;
  onChange: (searchString: string) => void;
  searchString: string;
}

const Input: React.FC<IProps> = (props) => {
  const searchMovie = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.onChange(e.target.value);
  };

  const { searchString } = props;

  return (
    <form className={styles.searchForm}>
      <input
        type="text"
        className={styles.searchFormInput}
        value={searchString}
        placeholder={props.placeholder}
        onChange={searchMovie}
      />
    </form>
  );
};

export default Input;
