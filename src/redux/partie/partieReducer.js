import {CREATE_PARTIE_REQUEST,CREATE_PARTIE_SUCCESS,CREATE_PARTIE_FAILURE,
FETCH_PARTIES_REQUEST,FETCH_PARTIES_SUCCESS,FETCH_PARTIES_FAILURE
} from './partieActionTypes'

const initialState = {
    creatingPartie:false,
    createPartiePayload:null,
    createPartieError:null,

    fetchingParties:false,
    fetchedPartiesPayload:null,
    fetchPartiesError:null
}

export default function partieReducer( state=initialState,action){
    switch(action.type){
        case CREATE_PARTIE_REQUEST:
            return{
                ...state,
                creatingPartie:true
            }

        case CREATE_PARTIE_SUCCESS:
            return{
                ...state,
                creatingPartie:false,
                createPartiePayload:action.payload
            }

        case CREATE_PARTIE_FAILURE:
            return{
                ...state,
                creatingPartie:true,
                createPartieError:action.payload
            }

        case FETCH_PARTIES_REQUEST:
            return{
                ...state,
                fetchingParties:true
            }

        case FETCH_PARTIES_SUCCESS:
            return{
                ...state,
                fetchingParties:false,
                fetchedPartiesPayload:action.payload
            }
        case FETCH_PARTIES_FAILURE:
            return{
                ...state,
                fetchingParties:false,
                fetchPartiesError:action.payload
            }
        default : return state
    }

}