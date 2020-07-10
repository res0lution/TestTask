import SELECT_COUNTRY from '../constants/select';

const selectCountry = (country) => ({
  type: SELECT_COUNTRY,
  payload: country,
});

export default selectCountry;
