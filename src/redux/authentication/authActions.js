import {LOGIN_REQUEST,LOGIN_SUCCESS,LOGIN_FAILURE} from './authActionTypes';
import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAVPyT29ABQ9GX0SmMjiOxKAxndAIudbW0",
    authDomain: "bsoft-1736f.firebaseapp.com",
    projectId: "bsoft-1736f",
    storageBucket: "bsoft-1736f.appspot.com",
    messagingSenderId: "255152003727",
    appId: "1:255152003727:web:dcbaae1f41e9739c74eefa"
  };


//Initializing firebase app if not initialized
!firebase.apps.length ? firebase.initializeApp( firebaseConfig) : firebase.app()


export const loginRequest=(data)=>{
    return{
        type:LOGIN_REQUEST,
        payload:data
    }
}

export const loginSuccess=(data)=>{
    return{
        type:LOGIN_SUCCESS,
        payload:data
    }
}

export const loginFailure=(data)=>{
    return{
        type:LOGIN_FAILURE,
        payload:data
    }
}

export function logIn(email,password){
    return(dispatch)=>{
        dispatch(loginRequest(email));
        firebase.auth().signInWithEmailAndPassword(email,password)
        .then((user)=>{
            if(user){
                dispatch(loginSuccess("success"))
            }
        }).catch((error)=>{
            dispatch(loginFailure(error.message));
        })

    }
}