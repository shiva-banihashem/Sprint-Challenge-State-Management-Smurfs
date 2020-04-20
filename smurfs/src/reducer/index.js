import { FETCH_SMURF, SMURF_SUCCESS, SMURF_ERROR } from '../actions/smurfActions';
// import {SMURF_UPDATE,SMURF_ADD,SMURF_DELETE} from '../actions/smurfActions'


const initialState = {
    smurf:[],
    isLoading:false,
    error:null
}

const reducer = (state = initialState, action) =>{
    switch(action.type){
        case FETCH_SMURF:
            return {
                ...state,
                isLoading: true
            }
        case SMURF_SUCCESS:
            return {
                ...state,
                smurf: action.payload,
                isLoading: false
            }
        case SMURF_ERROR:
            return {
                ...state,
                error: action.payload,
                isLoading: false
            }
        
        default:
            return state;
    }
}

export default reducer;