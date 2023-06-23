import { OPEN_MODAL } from "./modalTypes";
import { CLOSE_MODAL } from "./modalTypes";

const initialState = {
    modalOpened: false,
    movie: {}
}

const modalReducer = (state = initialState, action) => {
    switch (action.type) {
        case OPEN_MODAL: return {
            modalOpened: true,
            movie: action.payload
        }
        case CLOSE_MODAL: return {
            modalOpened: false,
            movie: {}
        }
        default: return state
    }
}

export default modalReducer
