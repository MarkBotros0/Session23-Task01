import React from 'react'

const Stats = ({ page, topRatingMovie, numOfMovies }) => {
    return (
        <div className="header">
            <div className="container mb-3">
                <div className="row align-items-end ">
                    <h1 className="col-auto me-4">Movies</h1>
                </div>
                <div className="row  stats">
                    <h2 className="mb-2">Stats</h2>
                    <h3 className="mb-2 curr-page">Current Page: {page}</h3>
                    <h3 className="mb-2 number">Number of Movies: {numOfMovies}</h3>
                    <h3 className="mb-2 top-rated">Top rated movie: {topRatingMovie.original_title}</h3>
                    <h3 className="mb-2 rating">Rating: {topRatingMovie.vote_average}</h3>
                </div>
            </div>
        </div>
    )
}

export default Stats