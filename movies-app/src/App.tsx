import React, { useState } from 'react';
import styles from './App.module.css';
import MoviesContainer from './components/MoviesContainer';
import Input from 'components/Input';
import Header from 'components/Header';
import Button from 'components/Button';
import { Provider } from 'react-redux';
import { store } from 'store';

function App() {
  const [searchString, setSearchString] = useState('');
  const handleChange = (searchString: string) => {
    setSearchString(searchString);
  };

  return (
    <Provider store={store}>
      <div className={styles.App}>
        <Header>
          <span className={styles.title}>netflixroulette</span>
          <h2 className={styles.subTitle}>FIND YOUR MOVIE</h2>
          <Input
            placeholder="Search movie"
            onChange={handleChange}
            searchString={searchString}
          />
          <div className={styles.search}>
            <div className={styles.chooseSearchBy}>
              <span className={styles.searchBySpan}>SEARCH BY</span>
              <Button text="TITLE" />
              <Button text="GENRE" />
            </div>
            <Button text="SEARCH" searchButton />
          </div>
        </Header>
        <MoviesContainer searchString={searchString} />
      </div>
    </Provider>
  );
}

export default App;
