import React from 'react';

import Main from './Main.jsx';
import SearchInput from './SearchInput.jsx';
import FavoriteList from './FavoriteList.jsx';

const App = () => (
  <div className="container">
    <div className="row">
      <div className="col-8">
        <header className="my-3 border p-3">
          <SearchInput />
        </header>

        <Main />
      </div>

      <div className="col-4 my-3 border">
        <FavoriteList />
      </div>
    </div>
  </div>
);

export default App;
