import React from 'react';
import publications from '../../database/publications.json';
import Reader from '../Reader';

const App = () => <Reader items={publications} />;

export default App;
