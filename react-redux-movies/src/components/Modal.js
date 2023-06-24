import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { closeModal } from '../redux/modal/modalActions'

const Modal = () => {

    const dispatch = useDispatch()
    const isModalOpened = useSelector(state => state.modal.modalOpened)
    const modalData = useSelector(state => state.modal.movie)

    return (
        <>
            {isModalOpened &&
                <div className="my-modal-view">
                    < div className="my-modal-window d-flex" >
                        <span id="close-btn" onClick={() => dispatch(closeModal())}>x</span>
                        <div className="d-flex">

                            <div className="img-wrapper col-md-5">
                                <img src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${modalData.poster_path}`} className="img-fluid h-100 movie-img" alt='#' />
                            </div>
                            <div className="content-wrapper col-md-7">
                                <h1 className="movie-name mt-3">{modalData.original_title}</h1>
                                <h2 className="movie-rate mt-5">{modalData.vote_average}/10</h2>
                                <h3 className="movie-desc mt-5">{modalData.overview}</h3>
                            </div>
                        </div>
                    </div >
                </div >
            }
        </>
    )
}

export default Modal