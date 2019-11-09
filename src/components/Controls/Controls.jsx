import React from 'react';
import styles from './Controls.module.css';

const Controls = ({ prevPage, nextPage, disabledPrev, disabledNext }) => (
  <section class={styles.controls}>
    <button
      type="button"
      class={disabledPrev ? styles.disabledButton : styles.button}
      onClick={prevPage}
    >
      Назад
    </button>
    <button
      type="button"
      class={disabledNext ? styles.disabledButton : styles.button}
      onClick={nextPage}
    >
      Вперед
    </button>
  </section>
);

export default Controls;
