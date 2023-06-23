import React, { useEffect, useState } from 'react'
import Movies from './Movies'
import Stats from './Stats'

const View = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [movies, setMovies] = useState([])
    const [topRatingMovie, setTopRatingMovie] = useState({})

    const fetchMovies = () => {
        setIsLoading(true)
        fetch(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}`, {
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMTQ2MzgxMDgzNzliODFjZWNiYTE4ZmI4MDMzZTBiNSIsInN1YiI6IjY0NzczZTc3MDA1MDhhMDExNmQ1NTViNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5aEDM2F7O2mNwqxa-ktSn9xPYzgqNlL-KLaNEyHQxfg'
            }
        })
            .then((result) => result.json())
            .then((response) => {
                setIsLoading(false)
                setMovies(response.results)
                getTopRating(response.results)
            })
    }

    const onChangePage = (change) => {
        if (change == "next") {
            setPage(page => page+1)
        } else if (change == "prev" && page > 1) {
            setPage(page => page-1)
        }
    }



    const getTopRating = (allMovies) => {
        setTopRatingMovie(allMovies.reduce(
            (prev, current) => {
                return prev.vote_average > current.vote_average ? prev : current
            }))
    }


    useEffect(() => {
        fetchMovies()
    }, [page])

    return (
        <>
            <Stats numOfMovies={20} page={page} topRatingMovie={topRatingMovie} />
            <Movies movies={movies} isLoading={isLoading} onChangePage={onChangePage} />
        </>
    )
}

export default View