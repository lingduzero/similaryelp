import { combineReducers } from 'redux'
import userinfo from './userinfo'
import storeinfo from './storeinfo'

export default combineReducers({
    userinfo,
    storeinfo
})