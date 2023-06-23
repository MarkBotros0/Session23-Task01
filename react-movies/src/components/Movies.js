import React, { useState } from 'react'
import Modal from './Modal'

const Movies = ({ isLoading, movies, onChangePage }) => {

    const [modalData, setModalData] = useState({})
    const [isModalOpened, setIsModalOpened] = useState(false)

    const openModal = (movie) => {
        setIsModalOpened(true)
        setModalData(movie)
    }

    return (
        <>
            {isLoading ?
                <div className="d-flex justify-content-center myloader">
                    <div className="loader"></div>
                </div> :
                <>
                    <Modal modalData={modalData} setIsModalOpened={setIsModalOpened} isModalOpened={isModalOpened} />
                    <div className="mb-5 main">
                        <div className="container">
                            <div className="d-grid my-grid">
                                {Array.isArray(movies) && movies.map((movie, i) => (
                                    <div key={i} className="card" onClick={() => { openModal(movie) }}>
                                        <img src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${movie.poster_path}`} className="img-fluid card-img-top" />
                                        <div className="card-body text-center">
                                            <h6>{movie.original_title}</h6>
                                            <h6>{movie.vote_average}</h6>
                                        </div>
                                    </div>

                                ))}
                            </div>
                            <div className="mt-5 text-center">
                                <button className="myBtn prevBtn me-3" onClick={() => onChangePage("prev")}>Previous</button>
                                <button className="myBtn nextBtn" onClick={() => onChangePage("next")}>Next</button>
                            </div>
                        </div>
                    </div>
                </>
            }
        </>
    )
}

export default Movies