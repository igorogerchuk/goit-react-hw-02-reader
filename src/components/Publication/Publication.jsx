import React from 'react';
import styles from './Publication.module.css';

const Publication = ({ page, publications }) => (
  <article className={styles.publication} key={publications.id}>
    <h2>
      {page}. {publications[page - 1].title}
    </h2>
    <p>{publications[page - 1].text}</p>
  </article>
);

export default Publication;
