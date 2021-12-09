import React from 'react';
import styles from './App.module.css';
import MoviesContainer from './pages/MoviesContainer';
import Header from 'components/Header';
import Footer from 'components/Footer';
import NotFound from 'pages/NotFound';
import MoviePage from 'pages/MoviePage';
import { Provider } from 'react-redux';
import { store } from 'store';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from 'react-router-dom';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className={styles.App}>
          <Header>
            <nav>
              <ul className={styles.headerList}>
                <li className={styles.headerListItem}>
                  <Link to="/main" className={styles.link}>
                    Main
                  </Link>
                </li>
              </ul>
            </nav>
          </Header>

          <Routes>
            <Route path="/main" element={<MoviesContainer />} />
            <Route path="/film/:id" element={<MoviePage />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/" element={<Navigate to="/main" />} />
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
