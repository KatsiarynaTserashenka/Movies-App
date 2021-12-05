import React, { useState } from 'react';
import styles from './App.module.css';
import MoviesContainer from './components/MoviesContainer';
import Input from 'components/Input';
import Header from 'components/Header';
import Footer from 'components/Footer';
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
          <span className={styles.netflixroulette}>netflixroulette</span>
          <h2 className={styles.subTitle}>FIND YOUR MOVIE</h2>
          <Input
            placeholder="Search movie"
            onChange={handleChange}
            searchString={searchString}
          />
        </Header>
        <MoviesContainer searchString={searchString} />
        <Footer>
          <span className={styles.netflixroulette}>netflixroulette</span>
        </Footer>
      </div>
    </Provider>
  );
}

export default App;
