import { configureStore } from '@reduxjs/toolkit';
import modalReducer from './modal/modalSlice'
import pageReducer from './page/pageSlice'
import moviesReducer from './movies/moviesSlice'

export const store = configureStore({
    reducer: {
        page: pageReducer,
        modal: modalReducer,
        movies: moviesReducer
    }
})

export default store