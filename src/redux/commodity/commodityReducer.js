import {CREATE_COMMODITY_REQUEST,CREATE_COMMODITY_SUCCESS,CREATE_COMMODITY_FAILURE,
EDIT_COMMODITY_REQUEST,EDIT_COMMODITY_SUCCESS,EDIT_COMMODITY_FAILURE,
FETCH_COMMODITIES_REQUEST,FETCH_COMMODITIES_SUCCESS,FETCH_COMMODITIES_FAILURE
} from './commodityActionTypes'


const initialState={
    creatingCommodity:false,
    createCommodityPayload:null,
    createCommodityError:null,

    editingCommodity:false,
    editCommmodityPayload:null,
    editCommodityError:null,

    fetchingCommodities:false,
    fetchedCommoditiesPayload:null,
    fetchedCommoditiesError:null

}

export default function commodityReducer(state=initialState,action){
    switch(action.type){
        case CREATE_COMMODITY_REQUEST:
            return{
                ...state,
                creatingCommodity:true
            }
        case CREATE_COMMODITY_SUCCESS:
            return{
                ...state,
                creatingCommodity:false,
                createCommodityPayload:action.payload
            }
        case CREATE_COMMODITY_FAILURE:
            return{
                ...state,
                creatingCommodity:false,
                createCommodityError:action.payload
            }

        case EDIT_COMMODITY_REQUEST:
            return{
                ...state,
                editingCommodity:true
            }
        
        case EDIT_COMMODITY_SUCCESS:
            return{
                ...state,
                editingCommodity:false,
                editCommmodityPayload:action.payload
            }
        
        case EDIT_COMMODITY_FAILURE:
            return{
                ...state,
                editingCommodity:false,
                editCommodityError:action.payload
            }

        case FETCH_COMMODITIES_REQUEST:
            return{
                ...state,
                fetchingCommodities:true
            }

        case FETCH_COMMODITIES_SUCCESS:
            return{
                ...state,
                fetchingCommodities:false,
                fetchedCommoditiesPayload:action.payload
            }
        
        case FETCH_COMMODITIES_FAILURE:
            return{
                ...state,
                fetchingCommodities:false,
                fetchedCommoditiesError:action.payload
            }
        default: return state
    }

}