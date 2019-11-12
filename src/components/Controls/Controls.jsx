import React from 'react';
import styles from './Controls.module.css';

const Controls = ({ prevPage, nextPage, currentPage, lastPage }) => (
  <section className={styles.controls}>
    <button
      type="button"
      className={styles.button}
      onClick={prevPage}
      disabled={currentPage === 1}
    >
      Назад
    </button>
    <button
      type="button"
      className={styles.button}
      onClick={nextPage}
      disabled={currentPage === lastPage}
    >
      Вперед
    </button>
  </section>
);

export default Controls;
