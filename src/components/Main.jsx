import React from 'react';

import SearchResult from './SearchResult.jsx';
import CountryCard from './CountryCard.jsx';

const Main = () => (
  <main className="py-3 border col-12 p-3">
    <CountryCard />
    <SearchResult />
  </main>
);

export default Main;
