import React, { FC, useEffect } from 'react';
import styles from './MoviesContainer.module.css';
import MovieItem from 'components/MovieItem';
import Preloader from 'components/Preloader';
import { useTypedSelector } from 'hooks/useTypedSelector.';
import { useActions } from 'hooks/useActions';
import { RootState } from 'store/store';
import { useSelector, useDispatch } from 'react-redux';

const MoviesContainer: FC = () => {
  const { movies, error, loading, searchFilter, searchMovie, movieFilter } =
    useTypedSelector((state) => state.movie);
  const { fetchMovies } = useActions();
  const dispatch = useDispatch();

  useEffect(() => {
    fetchMovies();
  }, []);

  if (loading) {
    return <Preloader />;
  }
  if (error) {
    return <h1>{error}</h1>;
  }

  const filteredMoviesList =
    movies &&
    movies.filter((movie) => {
      return movie.title.toLowerCase().includes(searchMovie.toLowerCase());
    });

  return (
    <>
      <div className={styles.moviesContainer}>
        <div className={styles.moviesList}>
          {filteredMoviesList.map((movie) => {
            return <MovieItem movie={movie} key={movie.id} />;
          })}
        </div>
      </div>
    </>
  );
};

export default MoviesContainer;
