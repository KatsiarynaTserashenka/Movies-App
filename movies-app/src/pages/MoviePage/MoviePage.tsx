import React, { FC, useEffect } from 'react';
import styles from './MoviePage.module.css';
import NotFound from 'pages/NotFound';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from 'store/store';
import { Movie } from 'types/Movie';
import { useActions } from 'hooks/useActions';
import { useTypedSelector } from 'hooks/useTypedSelector.';
import player from 'img/player.jpg';

const MoviePage: FC = () => {
  const { movies } = useTypedSelector((state) => state.movie);
  const { id } = useParams();
  const { fetchMovies } = useActions();

  /* const movies = useSelector((state: RootState) => {
    if (state.movie !== undefined) {
      return state.movie.movies;
    } else {
    }
    return [];
  }); */

  useEffect(() => {
    fetchMovies();
  }, []);

  const movie =
    movies &&
    movies.find((movie: Movie) => {
      return movie.id === parseInt(id!);
    });

  return movie ? (
    <div className={styles.moviePage}>
      <h2 className={styles.movieTitle}>{movie.title}</h2>
      <div className={styles.movieItem}>
        <img
          src={movie.poster_path}
          alt={movie.title}
          className={styles.posterImg}
        />
        <div className={styles.movieInfo}>
          <p className={styles.movieOverview}>{movie.overview}</p>
          <p className={styles.movieVote}>
            <b>Popularity:</b> {movie.vote_average}
          </p>
          <p className={styles.movieBudget}>
            <b>Budget:</b> {movie.budget}
          </p>
          <p className={styles.movieGenres}>
            <b>Genre:</b>{' '}
            {movie &&
              movie.genres.map((genre: string) => {
                return <span className={styles.movieGenre}>{genre}</span>;
              })}
          </p>
          <p className={styles.movieRelease}>
            <b>Release date:</b> {movie.release_date}
          </p>
          <p className={styles.movieBudget}>
            <b>Runtime:</b> {movie.runtime}
          </p>
        </div>
      </div>
      <div className={styles.movieVideo}>
        <img src={player} alt="video" />
      </div>
    </div>
  ) : (
    <NotFound />
  );
};

export default MoviePage;
