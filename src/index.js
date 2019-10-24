import React from 'react';
import ReactDOM from 'react-dom';
import publications from './database/publications.json';
import Reader from './components/Reader';

ReactDOM.render(
  <Reader items={publications} />,
  document.getElementById('root'),
);
