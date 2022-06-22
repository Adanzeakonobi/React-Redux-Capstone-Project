import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import StatisticsFetch from '../redux/data';
import { GetStatistics } from '../redux/stats';

const HomePage = () => {
  const CountryStore = useSelector((store) => store.details);
  const dispatch = useDispatch();

  useEffect(() => {
    if (CountryStore.length === 0) {
      StatisticsFetch()
        .then((response) => dispatch(GetStatistics(response)));
    }
  }, []);

  const Africa = CountryStore.filter((item) => item.continent === 'Africa');

  return (
    <ul className="dataUL">
      {
      Africa.map((country) => (
        <Link key={country.country} to={{ pathname: `/country/${country.country}` }}>
          <li className="countryDetails">
            <div>
              {country.country}
              <br />
              Population:
              {' '}
              {country.population}
            </div>
            <div>
              <img src={country.country_flag} alt="flag" className="flag" />
            </div>
          </li>
        </Link>
      ))
    }
    </ul>
  );
};

export default HomePage;