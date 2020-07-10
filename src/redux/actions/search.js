import AwesomeDebouncePromise from 'awesome-debounce-promise';

import {
  SEARCH_START,
  SEARCH_FAILURE,
  SEARCH_SUCCESS,
  NOT_FOUND,
  SET_SEARCH_TEXT,
} from '../constants/search';

export const setSearchText = (text) => ({
  type: SET_SEARCH_TEXT,
  payload: text,
});

const notFound = (message) => ({
  type: NOT_FOUND,
  payload: message,
});

const startSearch = () => ({
  type: SEARCH_START,
});

export const successSearch = (data) => ({
  type: SEARCH_SUCCESS,
  payload: data,
});

const failureSearch = () => ({
  type: SEARCH_FAILURE,
});

const searchAPI = (text, type = 'name') => fetch(
  `https://restcountries.eu/rest/v2/${type}/${text}?fields=name;alpha3Code;borders;flag;languages;numericCode`,
  {
    method: 'GET',
  },
);

const searchAPIDebounced = AwesomeDebouncePromise(searchAPI, 500);

export const requestCountries = (text) => (dispatch) => {
  if (text.length !== 0) {
    dispatch(startSearch());
    searchAPIDebounced(text)
      .then((res) => res.json())
      .then((data) => {
        if (data.message) {
          dispatch(notFound(data.message));
        } else {
          dispatch(successSearch(data));
        }
      })
      .catch(() => {
        dispatch(failureSearch());
      });
  }
};

export const requestCountryByCode = (code) => (dispatch) => {
  dispatch(startSearch());

  searchAPIDebounced(code, 'alpha')
    .then((res) => res.json())
    .then((data) => {
      dispatch(successSearch([data]));
    })
    .catch(() => {
      dispatch(failureSearch());
    });
};
