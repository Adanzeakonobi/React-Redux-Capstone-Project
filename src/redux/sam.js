const url = 'https://disease.sh/v3/covid-19/countries';


const FETCH_STATS = 'covid/FETCH_STATS';
// const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

// const GET_STATS_SUCCESS = 'covid/GET_STATS_SUCCESS';
// const GET_STATS_LOADING = 'covid/GET_STATS_SUCCESS';
// const GET_STATS_FAILURE = 'covid/GET_STATS_SUCCESS';

const initialState = {
  books: [],
  loading: false,
  error: null,
};

export const fetchStats = (payload) => ({ type: FETCH_STATS, payload });
// export const removeBook = (id) => ({ type: REMOVE_BOOK, payload: id });
// export const fetchStatsSuccess = (stats) => ({ type: GET_STATS_SUCCESS, payload: stats });
// export const fetchStatsLoading = () => ({ type: GET_STATS_LOADING });
// export const fetchStatsFailure = (errMsg) => ({ type:  GET_STATS_FAILURE, payload: errMsg });

// export const fetchNewStats = () => (dispatch) => {
//   dispatch(fetchStatsLoading());
//   fetch(url)
//     .then((response) => response.json())
//     .then((data) => {
//       const clearedStats = [];
//       Object.keys(data).forEach((key) => {
//         if (key) {
//           clearedStats.push({ ...data[key][0], item_id: key });
//         }
//       });
//       dispatch(fetchStatsSuccess(clearedStats));
//     })
//     .catch((err) => {
//       dispatch(fetchStatsFailure(err.Message));
//     });
// };

export const fetchNewStats = (newStats) => (dispatch) => {
  fetch(url, {
    method: 'POST',
    headers: { 'content-Type': 'Application/json' },
    body: JSON.stringify(newStats),
  }).then(() => {
    dispatch(fetchStats(newStats));
  });
};

// export const deleteBook = (id) => (dispatch) => {
//   fetch(`${url}/${id}`, {
//     method: 'DELETE',
//   }).then(() => {
//     dispatch(getBook());
//   });
// };

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_STATS_LOADING:
      return {
        ...state,
        loading: true,
      };

    case GET_STATS_SUCCESS:
      return {
        ...state,
        loading: false,
        books: action.payload,
      };

    case GET_STATS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case FETCH_STATS:
      return {
        ...state,
        loading: false,
        books: [...state.books, action.payload],
      };
    default: return state;
  }
};

export default booksReducer;
