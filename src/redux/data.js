import axios from 'axios';

const baseURL = 'https://disease.sh/v3/covid-19/countries';

const StatisticsFetch = async () => {
  const statistics = [];
  const response = await axios.get(baseURL);
  const responseData = response.data;

  responseData.map(({ countryInfo: { _id: id, flag }, ...data }) => {
    const covidData = {
      continent: data.continent,
      country: data.country,
      country_id: id,
      country_flag: flag,
      total_cases: data.cases,
      total_deaths: data.deaths,
      total_recovered: data.recovered,
      total_active: data.active,
      total_tests: data.tests,
      population: data.population,
      todays_cases: data.todayCases,
      todays_deaths: data.todayDeaths,
      todays_recovered: data.todayRecovered,
    };

    return statistics.push(covidData);
  });

  return statistics;
};

export default StatisticsFetch;