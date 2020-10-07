import Kaboom from '../../apis/kaboom';

import {put} from 'redux-saga/effects';
import * as actions from "../action";

export function* initHistorical() {
    try {
            const response = yield Kaboom.get("api/historical",{
                  params:{
                     interval:1
                  }})
            yield put(actions.setHistoricalData(response.data));
    } catch (error) {
        yield put(actions.setHistoricalData(null));
        yield put(actions.fetchHistoricalFailed());
    };
}