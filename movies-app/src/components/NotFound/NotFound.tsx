import React, { FC } from 'react';
import styles from './NotFound.module.css';

const NotFound: FC = () => {
  return (
    <div className={styles.notFoundContaiter}>
      <h2 className={styles.notFound}>404</h2>
      <h2 className={styles.notFound}>Not found</h2>
    </div>
  );
};

export default NotFound;
