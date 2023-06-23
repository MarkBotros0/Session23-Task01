import React, { useEffect } from 'react'
import Movies from './Movies'
import Stats from './Stats'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMoviesFailure, fetchMoviesRequest, fetchMoviesSuccess } from '../redux/movies/moviesActions'

const View = () => {

    const page = useSelector(state => state.page.page)
    const dispatch = useDispatch()

    const fetchMovies = () => {
        dispatch(fetchMoviesRequest())
        fetch(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}`, {
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMTQ2MzgxMDgzNzliODFjZWNiYTE4ZmI4MDMzZTBiNSIsInN1YiI6IjY0NzczZTc3MDA1MDhhMDExNmQ1NTViNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5aEDM2F7O2mNwqxa-ktSn9xPYzgqNlL-KLaNEyHQxfg'
            }
        })
            .then((result) => result.json())
            .then((response) => {
                dispatch(fetchMoviesSuccess({ movies: response.results, topRatedMovie: getTopRated(response.results) }))
            })
            .catch((error) => {
                dispatch(fetchMoviesFailure(error))
            })
    }

    const getTopRated = (allMovies) => {
        return allMovies.reduce(
            (prev, current) => {
                return prev.vote_average > current.vote_average ? prev : current
            })
    }


    useEffect(() => {
        fetchMovies()
    }, [page])

    return (
        <>
            <Stats />
            <Movies />
        </>
    )
}

export default View