import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { requestCountries, setSearchText } from '../redux/actions/search';

const SearchInput = () => {
  const dispatch = useDispatch();
  const searchText = useSelector((state) => state.searchRequest.searchText);

  useEffect(() => {
    dispatch(requestCountries(searchText));
  }, [searchText]);

  const onChangeHandler = (e) => {
    dispatch(setSearchText(e.target.value));
  };

  return (
    <div>
      <h1 className="text-center title">Search Field</h1>

      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <div className="input-group">
        <div className="input-group-prepend">
          <span className="input-group-text" id="validatedInputGroupPrepend">
            <i className="fas fa-search"></i>
          </span>
        </div>

        <input
          id="search"
          type="text"
          className="form-control form-control-lg"
          aria-describedby="Search Field"
          placeholder="Type a name of country"
          value={searchText}
          onChange={onChangeHandler}
          required
        />
      </div>
    </div>
  );
};

export default SearchInput;
