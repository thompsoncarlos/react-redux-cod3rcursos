import {
    MIN_NUM_CHANGED,
    MAX_NUM_CHANGED
} from './actionTypes'

export function changeMinNumber(newNumber) {
    return {
        type: MIN_NUM_CHANGED,
        payload: newNumber
    }
}

export function changeMaxNumber(newNumber) {
    return {
        type: MAX_NUM_CHANGED,
        payload: newNumber
    }
}