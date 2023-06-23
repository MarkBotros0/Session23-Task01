import { FETCH_MOVIES_FAILURE, FETCH_MOVIES_REQUEST, FETCH_MOVIES_SUCCESS } from "./moviesTypes";

const initialState = {
    isLoading: false,
    movies: [],
    topRatedMovie: {},
    error: ''
}

const moviesReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_MOVIES_REQUEST: return {
            ...state,
            isLoading: true
        }
        case FETCH_MOVIES_SUCCESS: return {
            ...state,
            isLoading: false,
            movies: action.payload.movies,
            topRatedMovie: action.payload.topRatedMovie
        }
        case FETCH_MOVIES_FAILURE: return {
            ...state,
            isLoading: false,
            error: action.payload
        }
        default: return state
    }
}

export default moviesReducer
