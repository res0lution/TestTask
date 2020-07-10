import {
  SEARCH_START,
  SEARCH_FAILURE,
  SEARCH_SUCCESS,
  RESET_RESULT,
  NOT_FOUND,
  SET_SEARCH_TEXT,
} from '../constants/search';

const INITIAL_STATE = {
  result: [],
  loading: false,
  error: null,
  message: null,
  searchText: '',
};

const searchReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_SEARCH_TEXT:
      return {
        ...state,
        searchText: action.payload,
      };
    case SEARCH_SUCCESS:
      return {
        ...state,
        result: action.payload,
        error: null,
        loading: false,
        message: null,
      };
    case SEARCH_START:
      return {
        ...state,
        loading: true,
        message: null,
        error: null,
      };
    case SEARCH_FAILURE:
      return {
        ...state,
        result: [],
        error: 'Something went wrong!',
        loading: false,
        message: null,
      };
    case RESET_RESULT:
      return {
        ...state,
        result: [],
        error: null,
        loading: false,
        message: null,
      };
    case NOT_FOUND:
      return {
        ...state,
        result: [],
        message: action.payload,
        error: null,
        loading: false,
      };
    default:
      return state;
  }
};

export default searchReducer;
