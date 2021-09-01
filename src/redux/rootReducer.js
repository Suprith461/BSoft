import { combineReducers } from 'redux'

import authReducer from '../redux/authentication/authReducer';
import commodityReducer from '../redux/commodity/commodityReducer';
import partieReducer from '../redux/partie/partieReducer';
import finalBillReducer from './finalBill/finalBillReducer';


const rootReducer = combineReducers({
 
auth:authReducer,
commodity:commodityReducer,
partie:partieReducer,
finalBill:finalBillReducer
})

export default rootReducer;
