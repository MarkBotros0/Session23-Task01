import { PRESS_NEXT } from "./pageTypes";
import { PRESS_PREV } from "./pageTypes";

export const pressNext = () => {
    return {
        type: PRESS_NEXT
    }
}

export const pressPrev = () => {
    return {
        type: PRESS_PREV
    }
}
