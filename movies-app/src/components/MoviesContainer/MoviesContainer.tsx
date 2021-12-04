import React, { FC, useEffect } from 'react';
import styles from './MoviesContainer.module.css';
import MovieItem from 'components/MovieItem';
import { useTypedSelector } from 'hooks/useTypedSelector.';
import { useActions } from 'hooks/useActions';

interface IProps {
  searchString: string;
}

const MoviesContainer: FC<IProps> = (props) => {
  const { movies, error, loading } = useTypedSelector((state) => state.movie);
  const { fetchMovies } = useActions();
  const { searchString } = props;

  useEffect(() => {
    fetchMovies();
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h1>{error}</h1>;
  }

  console.log(movies);

  const filteredMoviesList =
    movies &&
    movies.filter((movie) => {
      return movie.title.toLowerCase().includes(searchString);
    });

  return (
    <>
      <div className={styles.moviesContainer}>
        <div className={styles.moviesList}>
          {filteredMoviesList.slice(0, 24).map((movie) => {
            return <MovieItem movie={movie} key={movie.id} />;
          })}
        </div>
      </div>
    </>
  );
};

export default MoviesContainer;
