import SELECT_COUNTRY from '../constants/select';

const INITIAL_STATE = {
  currentCountry: {
    name: 'Default',
    flag: null,
    alpha3Code: 'Code',
    languages: [],
    borders: [],
    default: true,
  },
};

const selectReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SELECT_COUNTRY:
      return {
        ...state,
        currentCountry: action.payload,
        default: false,
      };
    default:
      return state;
  }
};

export default selectReducer;
