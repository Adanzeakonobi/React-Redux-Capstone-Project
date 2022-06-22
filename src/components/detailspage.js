import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import StatisticsFetch from '../redux/data';
import { GetStatistics } from '../redux/stats';

const Country = () => {
  const CountryStore = useSelector((store) => store.details);
  const dispatch = useDispatch();
  const { name } = useParams();
  const findCountry = CountryStore.find((country) => country.country === name);

  useEffect(() => {
    if (CountryStore.length === 0) {
      StatisticsFetch()
        .then((response) => dispatch(GetStatistics(response)));
    }
  });

  return (
    <div className="data-cont">
      <div className="continent-data">
        <h1>{name}</h1>
        <img src={findCountry.country_flag} alt="flag" className="flag2" />
      </div>
      <div>
        <ul className="current">
          <h3>Today&apos;s update:</h3>
          <li>
            New cases:
            {' '}
            {findCountry.todays_cases}
          </li>
          <li>
            Confirmed deaths:
            {' '}
            {findCountry.todays_deaths}
          </li>
          <li>
            New Recoveries:
            {' '}
            {findCountry.todays_recovered}
          </li>
        </ul>
        <ul className="sum">
          <h3>Total:</h3>
          <li>
            Confirmed cases:
            {' '}
            {findCountry.total_cases}
          </li>
          <li>
            Recovered:
            {' '}
            {findCountry.total_recovered}
          </li>
          <li>
            Active Cases:
            {' '}
            {findCountry.total_active}
          </li>
          <li>
            Total Tests:
            {' '}
            {findCountry.total_tests}
          </li>
          <li>
            Deaths:
            {' '}
            {findCountry.total_deaths}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Country;
