import React, { FC, useState, useEffect } from 'react';
import styles from './MoviesContainer.module.css';
import { Movie } from 'types/Movie';
import { MoviesResponse } from 'types/MoviesResponse';
import MovieItem from 'components/MovieItem';

interface IProps {
  searchString: string;
}

const MoviesContainer: FC<IProps> = (props) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const { searchString } = props;

  const fetchMovie = () => {
    fetch('https://reactjs-cdp.herokuapp.com/movies?limit=3000')
      .then((response): PromiseLike<MoviesResponse> => {
        return response.json();
      })
      .then((data) => setMovies(data.data))
      .catch((e) => console.error(e));
  };

  useEffect(() => {
    fetchMovie();
  }, []);

  const filteredMoviesList = movies.filter((movie) => {
    return movie.title.toLowerCase().includes(searchString);
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
