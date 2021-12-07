import React from 'react';
import styles from './App.module.css';
import MoviesContainer from './components/MoviesContainer';
import Input from 'components/Input';
import Header from 'components/Header';
import Footer from 'components/Footer';
import NotFound from 'components/NotFound';
import { Provider } from 'react-redux';
import { store } from 'store';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
  Navigate,
} from 'react-router-dom';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className={styles.App}>
          <Header>
            <span className={styles.netflixroulette}>netflixroulette</span>
            <h2 className={styles.subTitle}>FIND YOUR MOVIE</h2>
            <Input placeholder="Search movie" />
          </Header>

          <Routes>
            <Route path="/" element={<MoviesContainer />} />
            <Route path="*" element={<NotFound />} />
          </Routes>

          <Footer>
            <span className={styles.netflixroulette}>netflixroulette</span>
          </Footer>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
