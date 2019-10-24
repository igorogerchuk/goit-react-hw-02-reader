import React from 'react';
import styles from './Controls.module.css';

const Controls = ({ prevPage, nextPage }) => (
  <section class={styles.controls}>
    <button type="button" class={styles.button} onClick={prevPage}>
      Назад
    </button>
    <button type="button" class={styles.button} onClick={nextPage}>
      Вперед
    </button>
  </section>
);

export default Controls;
