import { combineReducers } from 'redux'

import authReducer from '../redux/authentication/authReducer';
import commodityReducer from '../redux/commodity/commodityReducer'


const rootReducer = combineReducers({
 
auth:authReducer,
commodity:commodityReducer
})

export default rootReducer;
