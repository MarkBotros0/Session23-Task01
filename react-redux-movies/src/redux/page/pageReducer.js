import { PRESS_NEXT } from "./pageTypes";
import { PRESS_PREV } from "./pageTypes";

const initialState = {
    page: 1
}

const pageReducer = (state = initialState, action) => {
    switch (action.type) {
        case PRESS_NEXT: return {
            ...state,
            page: state.page + 1
        }
        case PRESS_PREV:
            if (state.page > 1) {
                return {
                    ...state,
                    page: state.page - 1
                }
            } else { return state }

        default: return state
    }
}

export default pageReducer
