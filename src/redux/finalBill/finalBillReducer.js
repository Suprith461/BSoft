import {ADD_SMALLBILL_REQUEST,ADD_SMALLBILL_SUCESS,ADD_SMALLBILL_FAILURE,
FETCH_SMALLBILLS_REQUEST,FETCH_SMALLBILLS_SUCCESS,FETCH_SMALLBILLS_FAILURE,
FETCH_DOC_REQUEST,FETCH_DOC_SUCCESS,FETCH_DOC_FAILURE
}from './finalBillActionTypes'

const initialState = {
    addingSmallBill:false,
    addSmallBillPayload:null,
    addSmallBillError:null,

    fetchingSmallBills:false,
    fetchedSmallBillsPayload:null,
    fetchSmallBillsError:null,

    fetchingDoc:false,
    fetchedDocPayload:null,
    fetchDocError:null
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

        case FETCH_SMALLBILLS_REQUEST:
            return{
                ...state,
                fetchingSmallBills:true
            }
        case FETCH_SMALLBILLS_SUCCESS:
            return{
                ...state,
                fetchingSmallBills:false,
                fetchedSmallBillsPayload:action.payload
            }
        case FETCH_SMALLBILLS_FAILURE:
            return{
                ...state,
                fetchingSmallBills:false,
                fetchSmallBillsError:action.payload
            }

        case FETCH_DOC_REQUEST:
            return{
                ...state,
                fetchingDoc:true
            }
        
        case FETCH_DOC_SUCCESS:
            return{
                ...state,
                fetchingDoc:false,
                fetchedDocPayload:action.payload
            }
        
        case FETCH_DOC_FAILURE:
            return{
                ...state,
                fetchingDoc:false,
                fetchDocError:action.payload
            }
        default: return state;
    }
}