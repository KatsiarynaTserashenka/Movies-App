import React, { FC } from 'react';
import styles from './Modal.module.css';
import classNames from 'classnames/bind';
import { Movie } from 'types/Movie';

let cx = classNames.bind(styles);

interface IProps {
  children: JSX.Element;
  isOpened: boolean;
  onModalClose: () => void;
  movie: Movie;
}

const Modal: FC<IProps> = (props) => {
  const { children, isOpened, onModalClose, movie } = props;

  return (
    <div
      className={cx({
        modalWrapper: true,
        open: isOpened === true,
        close: isOpened === false,
      })}
    >
      <div className={styles.modalBorder}>
        <div
          className={styles.modalBody}
          style={{
            backgroundImage: `url("${movie.poster_path}")`,
            backgroundPosition: 'top center',
            backgroundSize: 'cover',
            color: '#fff',
          }}
        >
          <span className={styles.modalClose} onClick={onModalClose}>
            ×
          </span>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
