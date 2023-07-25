import { configureStore } from '@reduxjs/toolkit';
import modalReducer from './modal/modalSlice'
import moviesReducer from './movies/moviesSlice'
import pageReducer from './page/pageSlice'

const store = configureStore({
    reducer: {
        modal: modalReducer,
        movies: moviesReducer,
        page: pageReducer,
    },
});

export default store;
