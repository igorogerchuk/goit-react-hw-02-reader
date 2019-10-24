import React from 'react';
import styles from './Counter.module.css';

const Counter = ({ currentPage, pagesQuantity }) => (
  <p class={styles.counter}>
    {currentPage}/{pagesQuantity}
  </p>
);

export default Counter;
