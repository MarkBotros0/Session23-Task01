import { FETCH_MOVIES_FAILURE, FETCH_MOVIES_REQUEST, FETCH_MOVIES_SUCCESS } from "./moviesTypes";

const fetchMoviesRequest = () => {
    return {
        type: FETCH_MOVIES_REQUEST
    }
}

const fetchMoviesSuccess = (movies = []) => {
    return {
        type: FETCH_MOVIES_SUCCESS,
        payload: movies
    }
}
const fetchMoviesFailure = (error = '') => {
    return {
        type: FETCH_MOVIES_FAILURE,
        payload: error
    }
}

const fetchMovies = (page) => {
    return (dispatch) => {
        dispatch(fetchMoviesRequest())
        fetch(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}`, {
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMTQ2MzgxMDgzNzliODFjZWNiYTE4ZmI4MDMzZTBiNSIsInN1YiI6IjY0NzczZTc3MDA1MDhhMDExNmQ1NTViNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5aEDM2F7O2mNwqxa-ktSn9xPYzgqNlL-KLaNEyHQxfg'
            }
        })
            .then((result) => result.json())
            .then((response) => {
                const movies = response.results
                const topRatedMovie = movies.reduce((prev, current) => prev.vote_average > current.vote_average ? prev : current)
                dispatch(fetchMoviesSuccess({ movies, topRatedMovie }))
            })
            .catch((error) => {
                dispatch(fetchMoviesFailure(error))
            })
    }
}

export default fetchMovies
