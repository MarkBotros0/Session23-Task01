import { combineReducers } from "redux";
import modalReducer from './modal/modalReducer'
import pageReducer from "./page/pageReducer";
import moviesReducer from "./movies/moviesReducer";

const rootReducer = combineReducers({
    page: pageReducer,
    modal: modalReducer,
    movies: moviesReducer
})

export default rootReducer