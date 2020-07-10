import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import selectCountry from '../redux/actions/select';

export default function SearchResult() {
  const result = useSelector((state) => state.searchRequest.result);
  const searchText = useSelector((state) => state.searchRequest.searchText);
  const loading = useSelector((state) => state.searchRequest.loading);
  const message = useSelector((state) => state.searchRequest.message);
  const error = useSelector((state) => state.searchRequest.error);
  const dispatch = useDispatch();

  if (result.length === 1) dispatch(selectCountry(result[0]));

  return (
    <div className="d-flex flex-column align-items-center justify-content-center">
      {loading ? (
        <div className="spinner-border text-primary" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      ) : (
        <>
          {message && (
            <h2 className="my-3 text-center d-flex justify-content-center align-items-center w-100">
              <i className="far fa-sad-tear"></i>
              {message}
            </h2>
          )}

          {error && (
            <h2 className="my-3 text-center text-danger d-flex justify-content-center align-items-center w-100">
              <i className="fas fa-bug"></i>
              {error}
            </h2>
          )}

          <ul className="list-group my-2 w-100">
            {searchText
              && result.length > 1
              && result.map((country) => (
                <li
                  className="list-group-item d-flex flex-row justify-content-between"
                  key={country.numericCode}
                >
                  <h4>{country.name}</h4>

                  <button
                    className="btn btn-primary"
                    onClick={() => dispatch(selectCountry(country))}
                  >
                    <i className="fas fa-eye mr-2"></i>
                    Show more
                  </button>
                </li>
              ))}
          </ul>
        </>
      )}
    </div>
  );
}
