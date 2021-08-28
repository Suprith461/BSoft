import {ADD_SMALLBILL_REQUEST,ADD_SMALLBILL_SUCESS,ADD_SMALLBILL_FAILURE}from './finalBillActionTypes'
import firebase from 'firebase/app'
import 'firebase/firestore'

export function addSmallBillRequest(data){
    return{
        type:ADD_SMALLBILL_REQUEST,
        payload:data
    }
}

export function addSmallBillSuccess(data){
    return{
        type:ADD_SMALLBILL_SUCESS,
        payload:data
    }
}

export function addSmallBillFailure(data){
    return{
        type:ADD_SMALLBILL_FAILURE,
        payload:data
    }
}


export function addSmallBill(data){
    return(dispatch)=>{
       
        dispatch(addSmallBillRequest())
        firebase.firestore().collection('bills').doc().set(data,{merge:true}).then(()=>{
            dispatch(addSmallBillSuccess('success'))
        }).catch((error)=>{
            dispatch(addSmallBillFailure(error))
        })

    }
}
