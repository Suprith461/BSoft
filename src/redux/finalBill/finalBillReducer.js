import {ADD_SMALLBILL_REQUEST,ADD_SMALLBILL_SUCESS,ADD_SMALLBILL_FAILURE}from './finalBillActionTypes'

const initialState = {
    addingSmallBill:false,
    addSmallBillPayload:null,
    addSmallBillError:null
}

export default function finalBillReducer(state=initialState,action){
    switch(action.type){
        case ADD_SMALLBILL_REQUEST:
            return{
                ...state,
                addingSmallBill:true
            }
        
        case ADD_SMALLBILL_SUCESS:
            return{
                ...state,
                addingSmallBill:false,
                addSmallBillPayload:action.payload
            }
        
        case ADD_SMALLBILL_FAILURE:
            return{
                ...state,
                addingSmallBill:false,
                addSmallBillError:action.payload
            }

        default: return state;
    }
}