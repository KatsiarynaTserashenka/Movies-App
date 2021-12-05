import React, { useState, useCallback } from 'react';
import styles from './MovieItem.module.css';
import { Movie } from 'types/Movie';
import Modal from '../Modal';
import MovieInfo from '../MovieInfo';

interface IProps {
  movie: Movie;
}

const MovieItem: React.FC<IProps> = (props) => {
  const [modal, setModal] = useState(false);
  const { movie } = props;

  const addDefaultSrc = (e: any) => {
    e.target.src =
      'https://d5ip5p2ldkpmf.cloudfront.net/cinema/DB_Photos/default/Movies/movies.jpg';
  };

  const toggleModal = useCallback(() => {
    setModal(modal === false ? true : false);
  }, [modal, setModal]);

  const release_date = movie.release_date.split('-')[0];
  return (
    <>
      <div className={styles.movieItem}>
        <img
          onError={addDefaultSrc}
          src={movie.poster_path}
          alt={movie.title}
          className={styles.poster}
          onClick={toggleModal}
        />

        <div className={styles.movieMainInfo}>
          <div>
            <h3 className={styles.movieTitle}>{movie.title}</h3>
            <span>{movie.genres[0]}</span>
          </div>
          <span className={styles.dateRelease}>{release_date}</span>
        </div>
      </div>
      <Modal
        isOpened={modal}
        onModalClose={toggleModal}
        key={movie?.id}
        movie={movie}
      >
        <MovieInfo movie={movie} />
      </Modal>
    </>
  );
};

export default MovieItem;
