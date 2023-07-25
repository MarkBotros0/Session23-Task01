import React from 'react'
import { useSelector } from 'react-redux'

const Stats = () => {

    const page = useSelector(state => state.page.page)
    const movies = useSelector(state => state.movies.movies)
    const topRatedMovie = useSelector(state => state.movies.topRatedMovie)

    return (
        <div className="header">
            <div className="container mb-3">
                <div className="row align-items-end ">
                    <h1 className="col-auto me-4 mt-3">Movies Guide</h1>
                </div>
                <div className="row  stats mx-1">
                    <h2 className="mb-2">Stats</h2>
                    <h3 className="mb-2 curr-page">Current Page: {page}</h3>
                    <h3 className="mb-2 number">Number of Movies: {movies.length}</h3>
                    <h3 className="mb-2 top-rated">Top rated movie: {topRatedMovie.original_title}</h3>
                    <h3 className="mb-2 rating">Rating: {topRatedMovie.vote_average}</h3>
                </div>
            </div>
        </div>
    )
}

export default Stats