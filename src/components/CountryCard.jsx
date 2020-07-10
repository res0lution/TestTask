import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { requestCountryByCode } from '../redux/actions/search';
import {
  addToFavorite,
  removeFromFavorite,
} from '../redux/actions/favoriteList';
import defaultImg from '../img/default.png';

export default function CountryCard() {
  const country = useSelector((state) => state.selectedCountry.currentCountry);
  const favoriteList = useSelector((state) => state.favoriteList.list);
  const dispatch = useDispatch();

  const isFavorite = (currentCountry) => favoriteList.some(
    (item) => currentCountry.alpha3Code === item.alpha3Code,
  );

  return (
    <div className="card my-2 p-3">
      <div className="row">
        <div className="col-4">
          <img className="card-img" src={country.flag || defaultImg} />
        </div>

        <div className="col-8">
          <h3>Name: {country.name}</h3>

          <p>Country Code: {country.alpha3Code}</p>

          <ul className="list-group mb-3">
            <li className="list-group-item font-weight-bold">Languages:</li>

            {country.languages.length !== 0 ? (
              country.languages.map((item, index) => (
                <li key={index} className="list-group-item">
                  {item.name}
                </li>
              ))
            ) : (
              <li className="list-group-item">
                <i className="fas fa-database mr-2"></i>
                No data
              </li>
            )}
          </ul>

          <div className="list-group mb-3">
            <div className="list-group-item font-weight-bold">
              Borders with:
            </div>

            {country.borders.length !== 0 ? (
              country.borders.map((item, index) => (
                <a
                  href="#"
                  key={index}
                  onClick={() => dispatch(requestCountryByCode(item))}
                  className="list-group-item list-group-item-action"
                >
                  {item}
                </a>
              ))
            ) : (
              <li className="list-group-item">
                <i className="fas fa-database mr-2"></i>
                No data
              </li>
            )}
          </div>

          {isFavorite(country) ? (
            <button
              className="btn btn-dark"
              onClick={() => dispatch(removeFromFavorite(country.alpha3Code))}
            >
              <i className="far fa-trash-alt mr-2"></i>
              Remove from Favorites
            </button>
          ) : (
            <button
              className="btn btn-success"
              onClick={() => dispatch(addToFavorite(country))}
              disabled={country.default}
            >
              <i className="fas fa-plus-square mr-2"></i>
              Add to Favorites
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
