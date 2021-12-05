import React from 'react';
import styles from './Input.module.css';
import Button from 'components/Button';

interface IProps {
  placeholder: string;
  onChange: (searchString: string) => void;
  searchString: string;
}

const Input: React.FC<IProps> = (props) => {
  const { onChange } = props;

  const searchMovie = () => {
    onChange(searchString);
  };

  const { searchString } = props;

  return (
    <div className={styles.searchForm}>
      <input
        type="text"
        className={styles.searchFormInput}
        value={searchString}
        placeholder={props.placeholder}
        onChange={(e: any) => {
          onChange(e.target.value);
        }}
      />
      <div className={styles.search}>
        <div className={styles.chooseSearchBy}>
          <span className={styles.searchBySpan}>SEARCH BY</span>
          <Button text="TITLE" />
          <Button text="GENRE" />
        </div>
        <Button text="SEARCH" searchButton onClick={searchMovie} />
      </div>
    </div>
  );
};

export default Input;
