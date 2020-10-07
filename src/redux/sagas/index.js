import { takeEvery } from 'redux-saga/effects';
import * as actionTypes from '../action/actionTypes'
import {initHistorical} from './historical';

export function* watchHistoricalData() {
    yield takeEvery(actionTypes.INIT_HISTORICAL_DATA, initHistorical)
}