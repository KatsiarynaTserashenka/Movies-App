import React, { useState, useCallback } from 'react';
import styles from './Input.module.css';
import Button from 'components/Button';
import Checkbox from 'components/Checkbox';
import { setSearchFilter, setSearchMovie } from 'store/actionCreators/movie';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'store/store';

interface IProps {
  placeholder: string;
}

const Input: React.FC<IProps> = (props) => {
  const { searchFilter } = useSelector((state: RootState) => state.movie);
  const [searchString, setSearchString] = useState('');

  const dispatch = useDispatch();

  const handleSearchString = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchString(event.target.value);
  };

  const handleSetSearchString = useCallback(() => {
    dispatch(setSearchMovie(searchString));
  }, [dispatch, searchString]);

  return (
    <div className={styles.searchForm}>
      <input
        type="text"
        className={styles.searchFormInput}
        value={searchString}
        placeholder={props.placeholder}
        onChange={handleSearchString}
      />
      <div className={styles.search}>
        <div className={styles.chooseSearchBy}>
          <span className={styles.searchBySpan}>SEARCH BY</span>
          <Checkbox text="TITLE" />
          <Checkbox text="GENRE" />
        </div>
        <Button text="SEARCH" onClick={handleSetSearchString} />
      </div>
    </div>
  );
};

export default Input;
