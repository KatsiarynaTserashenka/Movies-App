import React, { FC } from 'react';
import styles from './MovieInfo.module.css';
import { Movie } from 'types/Movie';

interface IProps {
  movie: Movie;
}

const MovieInfo: FC<IProps> = (props) => {
  const { movie } = props;

  return (
    <>
      <h2 className={styles.movieTitle}>{movie.title}</h2>
      <div className={styles.movieInfo}>
        <h3 className={styles.movieGenre}>{movie.genres[0]}</h3>
        <p className={styles.movieOverview}>{movie.overview}</p>
        <p className={styles.movieVote}>Popularity: {movie.vote_average}</p>
        <p className={styles.movieBudget}>Budget: {movie.budget}</p>
      </div>
    </>
  );
};

export default MovieInfo;
