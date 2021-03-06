import React, { FC, useEffect, useCallback, useState } from 'react';
import styles from './MoviesContainer.module.css';
import MovieItem from 'components/MovieItem';
import Preloader from 'components/Preloader';
import Checkbox from 'components/Checkbox';
import Button from 'components/Button';
import Input from 'components/Input';
import SearchBar from 'components/SearchBar';
import { SearchFilter, MovieFilter } from 'store/types/todo';
import { setMovieFilter } from 'store/actionCreators/movie';
import { useTypedSelector } from 'hooks/useTypedSelector.';
import { useActions } from 'hooks/useActions';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const MoviesContainer: FC = () => {
  const { movies, error, loading, searchFilter, searchMovie, movieFilter } =
    useTypedSelector((state) => state.movie);
  const [displayLimit] = useState(10);
  const { fetchMovies } = useActions();
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    fetchMovies();
  }, []);

  const chooseMovieFilter = useCallback(
    (filter: MovieFilter) => {
      dispatch(setMovieFilter(filter));
    },
    [dispatch]
  );

  if (loading) {
    return <Preloader />;
  }
  if (error) {
    return <h2>{error}</h2>;
  }

  const filteredMoviesList =
    movies &&
    movies.filter((movie) => {
      if (searchFilter === SearchFilter.GENRE) {
        return movie.genres.find((genre: string) =>
          genre.toLowerCase().includes(searchMovie.toLowerCase())
        );
      }
      return movie.title.toLowerCase().includes(searchMovie.toLowerCase());
    });

  if (movieFilter === 'rating') {
    filteredMoviesList.sort((a, b) => b.vote_average - a.vote_average);
  }
  if (movieFilter === 'release date') {
    filteredMoviesList.sort(
      (a, b) => +b.release_date.split('-')[0] - +a.release_date.split('-')[0]
    );
  }

  const onShowMore = () => {
    const query = new URLSearchParams(location.search);
    const totalMovies = query.get('totalMovies') || '10';
    const newTotalMovies = parseInt(totalMovies, 10) + 5;
    query.set('totalMovies', newTotalMovies.toString());
    navigate(`${location.pathname}?${query.toString()}`);
  };

  const newDisplayLimit = location.search.split('=')[1];

  return (
    <div className={styles.moviesContainer}>
      <SearchBar>
        <span className={styles.netflixroulette}>netflixroulette</span>
        <h2 className={styles.subTitle}>FIND YOUR MOVIE</h2>
        <Input placeholder="Search movie" />
      </SearchBar>
      <div className={styles.moviesTopBar}>
        <span>
          <b>{filteredMoviesList.length} movies found</b>
        </span>
        <div className={styles.chooseMovieFilter}>
          <span>
            <b>Sort by</b>
          </span>
          <Checkbox
            text={MovieFilter.RELEASE_DATE}
            isChecked={movieFilter === MovieFilter.RELEASE_DATE}
            handleCheck={() => chooseMovieFilter(MovieFilter.RELEASE_DATE)}
          />
          <Checkbox
            text={MovieFilter.RATING}
            isChecked={movieFilter === MovieFilter.RATING}
            handleCheck={() => chooseMovieFilter(MovieFilter.RATING)}
          />
        </div>
      </div>

      {filteredMoviesList.length === 0 ? (
        <h2 style={{ padding: '0 10%' }}>The are no movies found...</h2>
      ) : (
        <>
          <div className={styles.moviesList}>
            {filteredMoviesList
              .slice(
                0,
                !newDisplayLimit ? displayLimit : parseInt(newDisplayLimit)
              )
              .map((movie) => {
                return <MovieItem movie={movie} key={movie.id} />;
              })}
          </div>
          <Button text="Show more" onClick={onShowMore} showMoreButton />
        </>
      )}
    </div>
  );
};

export default MoviesContainer;
