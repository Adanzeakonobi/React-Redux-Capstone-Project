const APIURL = 'https://disease.sh/v3/covid-19/countries';

export const fetchContinentApi = async () => {
  const response = await fetch(APIURL);
  const data = await response.json();
  return data;
};

export const fetchPollutantApi = async (APIURL) => {
  const response = await fetch(APIURL);
  const data = await response.json();
  return data;
};

export const FETCH_CONTINENT = 'airpollution/continent/FETCH_CONTINENT';
const initialState = [];

export const fetchContinent = () => async (dispatch) => {
  const continentData = await fetchContinentApi();
  dispatch({
    type: FETCH_CONTINENT,
    continentData,
  });
};

const continentReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CONTINENT:
      return action.continentData;
    default:
      return state;
  }
};

export default continentReducer;