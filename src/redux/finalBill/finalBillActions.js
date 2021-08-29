import {ADD_SMALLBILL_REQUEST,ADD_SMALLBILL_SUCESS,ADD_SMALLBILL_FAILURE}from './finalBillActionTypes'
import firebase from 'firebase/app';
import 'firebase/firestore';
import moment from 'moment';


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
       
        dispatch(addSmallBillRequest());
        
        const dateToday = moment(new Date()).format("yyyy-mm-dd")

        

        firebase.firestore().collection('bills').doc(data.lorryNo+String.toString(dateToday)).get().then((doc)=>{
            if(doc.data().hasOwnProperty('smallBill')){
                const id = doc.data().smallBill.length +1
                
                firebase.firestore().collection('bills').doc(data.lorryNo+String.toString(dateToday))
                .update({smallBills:firebase.firestore.FieldValue.arrayUnion({...data.smallBill,id:id})})
                .then(()=>{
                    dispatch(addSmallBillSuccess('success'))
                }).catch((error)=>{
                    dispatch(addSmallBillFailure(error))
                })
            }else{
                const id = 0;
                firebase.firestore().collection('bills').doc(data.lorryNo+String.toString(dateToday))
                .update({smallBills:firebase.firestore.FieldValue.arrayUnion({...data.smallBill,id:id})})
                .then(()=>{
                    dispatch(addSmallBillSuccess('success'))
                }).catch((error)=>{
                    dispatch(addSmallBillFailure(error))
                })

            }
        })
                
    }
}
