import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { FaSearchLocation } from 'react-icons/fa';
import FetchStats from '../redux/data';
import { GetStats } from '../redux/stats';

const HomePage = () => {
  const countryStore = useSelector((store) => store.details);
  const dispatch = useDispatch();

  useEffect(() => {
    if (countryStore.length === 0) {
      FetchStats()
        .then((response) => dispatch(GetStats(response)));
    }
  }, []);

  let Africa = countryStore.filter((item) => item.continent === 'Africa');
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const search = query.get('search') || '';
  Africa = Africa.filter((country) => country.country.includes(search.toLowerCase()));
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState(search);

  const countryFilterOnChange = (event) => {
    navigate(event.target.value ? `?search=${event.target.value}` : '');
    setSearchValue(event.target.value);
  };

  return (
    <div className="homePage">
      <h1 className="continent">Africa</h1>
      <form className="formSearch">
        <div>
          <FaSearchLocation />
        </div>
        <div>
          <input className="searchInput" type="text" value={searchValue} placeholder="Search for country..." onChange={countryFilterOnChange} />
        </div>
      </form>
      <ul className="dataList">
        {
      Africa.map((country) => (
        <Link key={country.country} to={{ pathname: `/country/${country.country}` }}>
          <li className="infoCountry">
            <div className="information">
              <h1 className="countryName">
                {country.country}
              </h1>
              <div>
                <h2 className="population">
                  Population:
                </h2>
                {' '}
                <p className="number">
                  {country.population.toLocaleString()}
                </p>
              </div>
            </div>
            <div>
              <img src={country.country_flag} alt="flag" className="flag" />
            </div>
          </li>
        </Link>
      ))
    }
      </ul>
    </div>
  );
};

export default HomePage;
