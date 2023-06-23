import { OPEN_MODAL } from "./modalTypes";
import { CLOSE_MODAL } from "./modalTypes";

export const openModal = (movie) => {
    return {
        type: OPEN_MODAL,
        payload: movie
    }
}

export const closeModal = () => {
    return {
        type: CLOSE_MODAL,
        payload: {}
    }
}
