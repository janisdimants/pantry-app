import { createStore, combineReducers } from 'redux'

import pantry from './pantry/reducer'

export default createStore(
  combineReducers({
    pantry,
  })
)
