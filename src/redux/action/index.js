import * as types from './actionTypes';


export const initHistoricalData=()=>{
    return {type:types.INIT_HISTORICAL_DATA}
}

export const setHistoricalData=(data)=>{
    return {type:types.SET_HISTORICAL_DATA, historicalData:data}
}
export const fetchHistoricalFailed = () => {
    return {
        type: types.FETCH_FAILED_HISTORICAL_DATA
    };
};