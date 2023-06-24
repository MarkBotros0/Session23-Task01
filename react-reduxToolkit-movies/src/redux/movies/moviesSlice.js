import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isLoading: false,
    movies: [],
    topRatedMovie: {},
    error: ''
}

export const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        fetchMoviesRequest: (state) => {
            state.isLoading = true
        },
        fetchMoviesSuccess: (state, action) => {
            state.isLoading = false
            state.movies = action.payload.movies
            state.topRatedMovie = action.payload.topRatedMovie
        },
        fetchMoviesFailure: (state, action) => {
            state.isLoading = false
            state.error = action.payload
        }
    },
})

export const { fetchMoviesRequest, fetchMoviesSuccess, fetchMoviesFailure } = moviesSlice.actions

export const fetchMovies = (page) => (dispatch) => {
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


export default moviesSlice.reducer