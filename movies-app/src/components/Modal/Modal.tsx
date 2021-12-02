import React, { FC } from 'react';
import styles from './Modal.module.css';
import classNames from 'classnames/bind';

let cx = classNames.bind(styles);

interface IProps {
  children: JSX.Element;
  isOpened: boolean;
  onModalClose: () => void;
}

const Modal: FC<IProps> = (props) => {
  const { children, isOpened, onModalClose } = props;

  return (
    <div
      className={cx({
        modalWrapper: true,
        open: isOpened === true,
        close: isOpened === false,
      })}
    >
      <div className={styles.modalBody}>
        <span className={styles.modalClose} onClick={onModalClose}>
          ×
        </span>
        {children}
      </div>
    </div>
  );
};

export default Modal;
