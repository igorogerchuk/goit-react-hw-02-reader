import React from 'react';
import styles from './Counter.module.css';

const Counter = ({ currentPage, lastPage }) => (
  <p className={styles.counter}>
    {currentPage}/{lastPage}
  </p>
);

export default Counter;
