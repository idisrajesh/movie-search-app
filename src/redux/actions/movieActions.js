import { getRequest } from "../../shared/httpRequest";
import * as types from "./actionTypes";

export const searchMovies = (data, text, searchErrorResult) => {
    return {
        type: types.SEARCH_MOVIES,
        payload: {
            text,
            searchMovieData: data,
            searchErrorResult
        }
    }
}

export const selectedMovie = (data) => {
    return {
        type: types.SELECT_MOVIES,
        payload: data
    }
}

// Add movie action functions here as needed.  Use the getRequest function imported above to retrieve
// data from the https://www.omdbapi.com endpoint, either using the apiKey e27098be or creating
// your own.  Refer to https://www.omdbapi.com/ also for API documentations.
