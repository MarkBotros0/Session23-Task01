import React, { useEffect } from 'react'
import Movies from './Movies'
import Stats from './Stats'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMovies } from '../redux/movies/moviesSlice'

const View = () => {

    const page = useSelector(state => state.page.page)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchMovies(page))
    }, [page])

    return (
        <>
            <Stats />
            <Movies />
        </>
    )
}

export default View