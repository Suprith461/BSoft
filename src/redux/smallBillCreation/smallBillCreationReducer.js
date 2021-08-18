import {SMALLBILL_CREATION_REQUEST,SMALLBILL_CREATION_SUCCESS,SMALLBILL_CREATION_FAILURE} from './smallBillCreationActionTypes'

const initialState = {
    creatingSmallBill:false,
    smallBillPayload:null,
    smallBillCreateError:null
}


export default function smallBillCreationReducer(state = initialState,action){
    switch(action.type){
        case SMALLBILL_CREATION_REQUEST:
            return{
                ...state,
                creatingSmallBill:true,
                smallBillPayload:action.payload,
            
            }
        case SMALLBILL_CREATION_SUCCESS:
            return{
                ...state,
                creatingSmallBill:false,
                smallBillPayload:action.payload
            }

        case SMALLBILL_CREATION_FAILURE:
            return{
                ...state,
                creatingSmallBill:false,
                smallBillCreateError:action.payload
            }
        default : return state
    }

}