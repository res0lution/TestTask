import {
  ADD_TO_FAVORITE,
  REMOVE_FROM_FAVORITE,
} from '../constants/favoriteList';

const INITIAL_STATE = {
  list: [],
};

const favoriteListReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TO_FAVORITE:
      return {
        ...state,
        list: [...state.list, action.payload],
      };
    case REMOVE_FROM_FAVORITE:
      return {
        ...state,
        list: state.list.filter(
          (country) => country.alpha3Code !== action.payload,
        ),
      };
    default:
      return state;
  }
};

export default favoriteListReducer;
