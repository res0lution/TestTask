import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { removeFromFavorite } from '../redux/actions/favoriteList';

export default function FavoriteList() {
  const favoriteList = useSelector((state) => state.favoriteList.list);
  const dispatch = useDispatch();

  return (
    <section>
      <h2 className="text-center my-2">
        <i className="fas fa-heart mr-2"></i>
        Favorites
      </h2>

      {favoriteList.length === 0 && (
        <p className="text-center">You don`t have countries in your list</p>
      )}

      <ol className="list-group">
        {favoriteList.map((country, index) => (
          <li
            className="list-group-item d-flex align-items-center flex-wrap justify-content-between"
            key={country.numericCode}
          >
            <span className="badge badge-dark badge-pill">{index + 1}</span>

            <h4>{country.name}</h4>

            <button
              onClick={() => dispatch(removeFromFavorite(country.alpha3Code))}
              className="btn btn-dark"
            >
              <i className="far fa-trash-alt mr-2"></i>
              Remove
            </button>
          </li>
        ))}
      </ol>
    </section>
  );
}
