import {
  REMOVE_FROM_FAVORITE,
  ADD_TO_FAVORITE,
} from '../constants/favoriteList';

export const removeFromFavorite = (code) => ({
  type: REMOVE_FROM_FAVORITE,
  payload: code,
});

export const addToFavorite = (country) => ({
  type: ADD_TO_FAVORITE,
  payload: country,
});
