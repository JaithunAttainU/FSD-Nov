import { combineReducers } from 'redux'
import { fetchUsers, updateSelectedUserInfo } from './userReducer'

const reducers = combineReducers({
  users: fetchUsers,
  selectedUserInfo: updateSelectedUserInfo
})


export default reducers