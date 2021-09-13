import {CREATE_PARTIE_REQUEST,CREATE_PARTIE_SUCCESS,CREATE_PARTIE_FAILURE,
    FETCH_PARTIES_REQUEST,FETCH_PARTIES_SUCCESS,FETCH_PARTIES_FAILURE
    } from './partieActionTypes'


import firebase from 'firebase/app'
import 'firebase/firestore'

export function createPartieRequest(data){
    return{
        type:CREATE_PARTIE_REQUEST,
        payload:data
    }
}

export function createPartieSuccess(data){
    return{
        type:CREATE_PARTIE_SUCCESS,
        payload:data
    }
}

export function createPartieFailure(data){
    return{
        type:CREATE_PARTIE_FAILURE,
        payload:data
    }
}


export function createPartie(data){
    return(dispatch)=>{
        dispatch(createPartieRequest());
        firebase.firestore().collection('parties').doc(data.partieName).set(data).then(()=>{
            dispatch(createPartieSuccess("success"));
        }).catch((error)=>{
            dispatch(createPartieFailure(error))
        })

    }
}

export function fetchPartiesRequest(data){
    return{
        type:FETCH_PARTIES_REQUEST,
        payload:data
    }
}

export function fetchPartiesSuccess(data){
    return{
        type:FETCH_PARTIES_SUCCESS,
        payload:data
    }
}

export function fetchPartiesFailure(data){
    return{
        type:FETCH_PARTIES_FAILURE,
        payload:data
    }
}

export function fetchParties(){
    return(dispatch)=>{
        dispatch(fetchPartiesRequest());
        firebase.firestore().collection('parties')
        .onSnapshot((querySnap)=>{
            const parties = []
            let i = 0
            querySnap.forEach((doc)=>{
                parties.push({...doc.data(),id:i,subCategory:doc.data().partieName+', '+doc.data().partiePlace,showAs:doc.data().partieName+', '+doc.data().partiePlace});
                i++;

            })
            //console.log(parties)
            dispatch(fetchPartiesSuccess(parties))
        })
    }
}