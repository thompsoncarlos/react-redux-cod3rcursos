import { createStore, combineReducers } from 'redux'

import reducerNumber from './reducers/numbers'

const reducers = combineReducers({
    numbers: reducerNumber,
})

export default function storeConfig() {
    return createStore(reducers)
}

