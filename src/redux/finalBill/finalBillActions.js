import {ADD_SMALLBILL_REQUEST,ADD_SMALLBILL_SUCESS,ADD_SMALLBILL_FAILURE,
    FETCH_SMALLBILLS_REQUEST,FETCH_SMALLBILLS_SUCCESS,FETCH_SMALLBILLS_FAILURE,
    FETCH_DOC_REQUEST,FETCH_DOC_SUCCESS,FETCH_DOC_FAILURE
}from './finalBillActionTypes'
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

export function fetchDocRequest(data){
    return{
        type:FETCH_DOC_REQUEST,
        payload:data
    }

}

export function fetchDocSuccess(data){
    return{
        type:FETCH_DOC_SUCCESS,
        payload:data
    }

}

export function fetchDocFailure(data){
    return{
        type:FETCH_DOC_FAILURE,
        payload:data
    }

}


function addKgandQuintal(qui,k){ 
    console.log("Quintal",qui+parseInt(k/100))
    console.log("Kg",k%100)
    return {quintal:qui+parseInt(k/100),kg:k%100}
    }
   

export function addSmallBill(data){
    return(dispatch)=>{
       
        dispatch(addSmallBillRequest());
        dispatch(fetchDocRequest())
        
        const dateToday = moment(Date()).format('DD-MM-YYYY')
        console.log(dateToday,'DATA',data)
        

        firebase.firestore().collection('bills').doc(data.lorryNo+dateToday).get().then((doc)=>{
            //console.log(doc.data() ,doc.data().smallBill )
            if(doc.data()!=undefined && doc.data().smallBills!=undefined){
                dispatch(fetchDocSuccess(doc.data()))
                console.log("If loop is being executed")
                const id = doc.data().smallBills.length +1

                const smallBills = doc.data().smallBills;
                const purchaseTotal = {tBags:0,tQuintals:0,tkg:0,totalAmount:0}
                smallBills.forEach((bill) => {
                    console.log("Bill",bill)
                    purchaseTotal.tBags += bill.bags;
                    purchaseTotal.tQuintals += bill.quintal;
                    purchaseTotal.tkg += bill.kg;
                    purchaseTotal.totalAmount += bill.total
                });

                purchaseTotal.tBags += data.smallBill.bags
                purchaseTotal.tQuintals += data.smallBill.quintal
                purchaseTotal.tkg += data.smallBill.kg
                purchaseTotal.totalAmount += data.smallBill.total

                purchaseTotal.totalAmount = purchaseTotal.totalAmount

                const quintKg = addKgandQuintal(purchaseTotal.tQuintals,purchaseTotal.tkg)
                purchaseTotal.tQuintals= quintKg.quintal;
                purchaseTotal.tkg = quintKg.kg;
                console.log("Purchase total")

                
                firebase.firestore().collection('bills').doc(data.lorryNo+dateToday)
                .update({smallBills:firebase.firestore.FieldValue.arrayUnion({...data.smallBill,id:id}),
                    totalPurchase:purchaseTotal
                })
                .then(()=>{

                    dispatch(fetchDocSuccess({totalPurchase:purchaseTotal}))
                    dispatch(addSmallBillSuccess('success'))
                    dispatch(fetchSmallBills(data.lorryNo+dateToday))
                }).catch((error)=>{
                    
                    dispatch(addSmallBillFailure(error))
                })
            }else{
                dispatch(fetchDocFailure("Document does not exist!"))
                console.log("Else loop is being executed")
                const id = 0;
                firebase.firestore().collection('bills').doc(data.lorryNo+dateToday)
                .set({smallBills:firebase.firestore.FieldValue.arrayUnion({...data.smallBill,id:id}),
                    totalPurchase:{tBags:data.smallBill.bags,tQuintals:addKgandQuintal(data.smallBill.quintal,data.smallBill.kg).quintal,tkg:addKgandQuintal(data.smallBill.quintal,data.smallBill.kg).kg,totalAmount:data.smallBill.total}
                })
                .then(()=>{
                    dispatch(fetchDocSuccess({smallBills:firebase.firestore.FieldValue.arrayUnion({...data.smallBill,id:id}),
                    totalPurchase:{tBags:data.smallBill.bags,tQuintals:addKgandQuintal(data.smallBill.quintal,data.smallBill.kg).quintal,tkg:addKgandQuintal(data.smallBill.quintal,data.smallBill.kg).kg,totalAmount:data.smallBill.total}
                }))
                    dispatch(addSmallBillSuccess('success'))
                    dispatch(fetchSmallBills(data.lorryNo+dateToday))
                }).catch((error)=>{
                    dispatch(addSmallBillFailure(error))
                })

            }
        }).catch((error)=>{
            dispatch(fetchDocFailure(error))
        })
                
    }
}


export function fetchSmallBillsRequest(data){
    return{
        type:FETCH_SMALLBILLS_REQUEST,
        payload:data
    }

}
export function fetchSmallBillsSuccess(data){
    return{
        type:FETCH_SMALLBILLS_SUCCESS,
        payload:data
    }
}

export function fetchSmallBillsFailure(data){
    return{
        type:FETCH_SMALLBILLS_FAILURE,
        payload:data
    }
}



export function fetchSmallBills(data){
    return(dispatch)=>{
        dispatch(fetchSmallBillsRequest());
        console.log(data)

        firebase.firestore().collection('bills').doc(data).get().then((doc)=>{
            dispatch(fetchSmallBillsSuccess(doc.data().smallBills));
        }).catch((error)=>{
            dispatch(fetchSmallBillsFailure(error));
        })

    }
}