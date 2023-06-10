import { combineReducers } from 'redux'
import { updateCounter } from './counterReducer'

const reducers = combineReducers({
  count: updateCounter
})


export default reducers