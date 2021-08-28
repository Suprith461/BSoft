import {CREATE_COMMODITY_REQUEST,CREATE_COMMODITY_SUCCESS,CREATE_COMMODITY_FAILURE,
    EDIT_COMMODITY_REQUEST,EDIT_COMMODITY_SUCCESS,EDIT_COMMODITY_FAILURE,
    FETCH_COMMODITIES_REQUEST,FETCH_COMMODITIES_SUCCESS,FETCH_COMMODITIES_FAILURE
    } from './commodityActionTypes'

    import firebase from "firebase/app";
    import 'firebase/firestore'

    export function createCommodityRequest(data){
        return{
            type:CREATE_COMMODITY_REQUEST,
            payload:data
        }
    }

    export function createCommoditySuccess(data){
        return{
            type:CREATE_COMMODITY_SUCCESS,
            payload:data
        }
    }

    export function createCommodityFailure(data){
        return{
            type:CREATE_COMMODITY_FAILURE,
            payload:data
        }
    }



    export function createCommodity(data){
        return(dispatch)=>{
            dispatch(createCommodityRequest());
            firebase.firestore().collection('commodities').doc(data.commodityName).set(data)
            .then((message)=>{
                dispatch(createCommoditySuccess(message))
            }).catch((error)=>{
                dispatch(createCommodityFailure(error))
            })

        }
    }


    export function fecthCommoditiesRequest(data){
        return{
            type:FETCH_COMMODITIES_REQUEST,
            payload:data
        }
    }

    export function fetchCommoditiesSuccess(data){
        return{
            type:FETCH_COMMODITIES_SUCCESS,
            payload:data
        }
    }

    export function fetchCommoditiesFailure(data){
        return{
            type:FETCH_COMMODITIES_FAILURE,
            payload:data
        }
    }

    export function fetchCommodities(){
        return(dispatch)=>{
            dispatch(fecthCommoditiesRequest())
            firebase.firestore().collection('commodities')
            .onSnapshot((querySnapshot)=>{
                const commodities=[]
                let i = 0;
                querySnapshot.forEach((doc)=>{
                    commodities.push({...doc.data(),id:i,subCategory:doc.data().commodityName,showAs:doc.data().commodityName})
                    i++;
                })
                console.log(commodities)
                dispatch(fetchCommoditiesSuccess(commodities))

            })  
        }
    }