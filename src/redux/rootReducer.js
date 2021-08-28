import { combineReducers } from 'redux'

import authReducer from '../redux/authentication/authReducer';
import commodityReducer from '../redux/commodity/commodityReducer';
import partieReducer from '../redux/partie/partieReducer'


const rootReducer = combineReducers({
 
auth:authReducer,
commodity:commodityReducer,
partie:partieReducer
})

export default rootReducer;
