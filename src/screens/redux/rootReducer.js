import { combineReducers } from 'redux'
import productReducer from '../redux/products/productReducer'
import  categoryReducer from '../redux/CategorySubCategory/categoryReducer';
import createOrderReducer from '../redux/createOrder/createOrderReducer';
import authReducer from '../redux/authentication/authReducer';
import orderReducer from '../redux/orders/orderReducer';
import paymentReducer from '../redux/payments/paymentReducer';
import sliderReducer from '../redux/sliders/sliderReducer';
const rootReducer = combineReducers({
  product: productReducer,
  categorySubCategory:categoryReducer,
createOrder:createOrderReducer,
auth:authReducer,
orders:orderReducer,
sliders:sliderReducer,
payments:paymentReducer})

export default rootReducer;
