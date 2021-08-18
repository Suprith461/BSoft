import {LOGIN_REQUEST,LOGIN_SUCCESS,LOGIN_FAILURE} from './authActionTypes';

const initialState = {
    loggingIn:false,
    loginPayload:null,
    loginError:null
}

export default function  authReducer (state=initialState,action){
    switch(action.type){
        case LOGIN_REQUEST:
            return{
                ...state,
                loggingIn:true,
                loginPayload:action.payload
            }
        case LOGIN_SUCCESS:
            return{
                ...state,
                loggingIn:false,
                loginPayload:action.payload
            }
        case LOGIN_FAILURE:
            return{
                ...state,
                loggingIn:false,
                loginError:action.payload
            }
        default : return state
    }
}

