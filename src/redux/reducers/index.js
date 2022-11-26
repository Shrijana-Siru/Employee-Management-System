import { combineReducers } from 'redux'
import {empReducers} from './empReducers'

export default combineReducers({
  users: empReducers
})