import React from 'react'
import Modal from './Modal'
import { useDispatch, useSelector } from 'react-redux'
import { pressNext, pressPrev } from '../redux/page/pageSlice'
import { openModal } from '../redux/modal/modalSlice'


const Movies = () => {

    const dispatch = useDispatch()
    const movies = useSelector(state => state.movies.movies)
    const isLoading = useSelector(state => state.movies.isLoading)

    return (
        <>
            {isLoading ?
                <div className="d-flex justify-content-center myloader">
                    <div className="loader"></div>
                </div> :
                <>
                    <Modal />
                    <div className="mb-5 main">
                        <div className="container">
                            <div className="d-grid my-grid">
                                {Array.isArray(movies) && movies.map((movie, i) => (
                                    <div key={i} className="card" onClick={() => dispatch(openModal(movie))}>
                                        <img src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${movie.poster_path}`} className="img-fluid card-img-top" alt='#' />
                                        <div className="card-body text-center">
                                            <h6>{movie.original_title}</h6>
                                            <h6>{movie.vote_average}</h6>
                                        </div>
                                    </div>

                                ))}
                            </div>
                            <div className="mt-5 text-center">
                                <button className="myBtn prevBtn me-3" onClick={() => dispatch(pressPrev())}>Previous</button>
                                <button className="myBtn nextBtn" onClick={() => dispatch(pressNext())}>Next</button>
                            </div>
                        </div>
                    </div>
                </>
            }
        </>
    )
}

export default Movies