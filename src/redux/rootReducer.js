import { combineReducers } from 'redux'

import authReducer from '../redux/authentication/authReducer';
import smallBillCreationReducer from '../redux/smallBillCreation/smallBillCreationReducer'

const rootReducer = combineReducers({
 
auth:authReducer,
smallBillCreation:smallBillCreationReducer
})

export default rootReducer;
