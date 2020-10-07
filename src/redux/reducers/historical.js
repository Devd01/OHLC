import * as types from '../action/actionTypes';
import {csvToJSON} from '../../utils/util'

const initialState = {
    historicalData: null,
    error: false,
    loading: true
};
const setHostorcalData=(state,historicalData)=>{
    const data=csvToJSON(historicalData);
    return {...state,series:[{
              name: 'candle',
              data:data
            }],
            loading:false
        }
}
const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
       case types.INIT_HISTORICAL_DATA: return {...state,loading:true};
       case types.FETCH_FAILED_HISTORICAL_DATA: return {...state,loading:false,error:true};
       case types.SET_HISTORICAL_DATA: return setHostorcalData(state,action.historicalData);
       default: return state;
    }
};
export default reducer;