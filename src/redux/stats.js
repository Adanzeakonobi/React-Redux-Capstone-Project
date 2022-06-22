const GET_STATS = 'covid/GET_STATS';

const intialState = [];

const GetStatistics = (payload) => ({
  type: GET_STATS,
  payload,
});

const StatisticsReducer = (state = intialState, action) => {
  switch (action.type) {
    case GET_STATS:
      return [...state, ...action.payload];
    default:
      return state;
  }
};

export { GetStatistics, StatisticsReducer };