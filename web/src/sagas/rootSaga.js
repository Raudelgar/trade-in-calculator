import { all, fork } from 'redux-saga/effects';
import * as watchTrade from './watchTrade';

export default function* rootSaga() {
	yield all([...Object.values(watchTrade)].map(fork));
}
