import {SMALLBILL_CREATION_REQUEST,SMALLBILL_CREATION_SUCCESS,SMALLBILL_CREATION_FAILURE} from  './smallBillCreationActionTypes'

export const smallBillCreationRequest=(data)=>{
    return{
        action:SMALLBILL_CREATION_REQUEST,
        payload:data
    }
}


export const smallBillCreationSuccess=(data)=>{
    return{
        action:SMALLBILL_CREATION_SUCCESS,
        payload:data
    }
}

export const smallBillCreationFailure=(data)=>{
    return{
        action:SMALLBILL_CREATION_FAILURE,
        payload:data
    }
}