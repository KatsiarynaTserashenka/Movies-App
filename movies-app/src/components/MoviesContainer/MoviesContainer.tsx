import React, { FC, useEffect, useCallback, useState } from 'react';
import styles from './MoviesContainer.module.css';
import MovieItem from 'components/MovieItem';
import Preloader from 'components/Preloader';
import Checkbox from 'components/Checkbox';
import Button from 'components/Button';
import { SearchFilter, MovieFilter } from 'store/types/todo';
import { setMovieFilter } from 'store/actionCreators/movie';
import { useTypedSelector } from 'hooks/useTypedSelector.';
import { useActions } from 'hooks/useActions';
import { useDispatch } from 'react-redux';

const MoviesContainer: FC = () => {
  const { movies, error, loading, searchFilter, searchMovie, movieFilter } =
    useTypedSelector((state) => state.movie);
  const [displayLimit, setDisplayLimit] = useState(10);
  const { fetchMovies } = useActions();
  const dispatch = useDispatch();

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
      if (searchFilter === SearchFilter.TITLE) {
        return movie.title.toLowerCase().includes(searchMovie.toLowerCase());
      }
      if (searchFilter === SearchFilter.GENRE) {
        return movie.genres.find((genre: string) =>
          genre.toLowerCase().includes(searchMovie.toLowerCase())
        );
      }
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
    setDisplayLimit(displayLimit + 5);
  };

  return (
    <div className={styles.moviesContainer}>
      <div className={styles.moviesTopBar}>
        <p>{filteredMoviesList.length} movies found</p>
        <div className={styles.chooseMovieFilter}>
          <p>Sort by</p>
          {Object.values(MovieFilter).map((filter, index) => (
            <Checkbox
              key={index}
              text={filter}
              isChecked={filter === movieFilter}
              handleCheck={() => chooseMovieFilter(filter)}
            />
          ))}
        </div>
      </div>

      {filteredMoviesList.length === 0 ? (
        <h2>The are no movies found...</h2>
      ) : (
        <>
          <div className={styles.moviesList}>
            {filteredMoviesList.slice(0, displayLimit).map((movie) => {
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
