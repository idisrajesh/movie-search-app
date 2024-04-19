import * as types from "../actions/actionTypes";

const initialState = {
  searchMovieList: [],
  selectedMovie: "",
  searchText: "",
  searchErrorResult: ""
};

const movieReducer = (state = initialState, action) => {
  const { payload, type } = action;
  switch (action.type) {
    case types.SEARCH_MOVIES:
      const { text, searchMovieData, searchErrorResult } = payload
      return {
        ...state,
        searchMovieList: searchMovieData,
        searchText: text,
        searchErrorResult
      }
    case types.SELECT_MOVIES:
      return {
        ...state,
        selectedMovie: payload
      }
    default: return state;
  }
}

export default movieReducer;


