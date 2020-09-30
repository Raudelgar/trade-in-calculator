import { take, call, put } from 'redux-saga/effects';
import {
	addTradeValue,
	LOAD_ALL_MAKES,
	LOAD_MODELS_MAKES,
	LOAD_MODELS_MAKES_YEAR,
	SEND_TRADE_DETAILS,
	setAllMakes,
	setModelsByMakes,
} from '../redux/actions/tradeActions';
import {
	getAllMakes,
	getModelsForMake,
	getModelsForMakeYear,
} from '../routes/services';
import { calculateEstimate } from '../util/tradeCalculation';

export function* tradeAllMakes() {
	while (true) {
		const { payload } = yield take(LOAD_ALL_MAKES);
		try {
			const data = yield call(getAllMakes, payload);
			yield put(setAllMakes(data));
		} catch (error) {
			console.log(error);
		}
	}
}

export function* tradeModelsMakes() {
	while (true) {
		const { payload } = yield take(LOAD_MODELS_MAKES);
		try {
			const data = yield call(getModelsForMake, payload);
			yield put(setModelsByMakes(data));
		} catch (error) {
			console.log(error);
		}
	}
}

export function* tradeModelsMakesYear() {
	while (true) {
		const { payload } = yield take(LOAD_MODELS_MAKES_YEAR);
		try {
			const data = yield call(getModelsForMakeYear, payload);
			yield put(setModelsByMakes(data));
		} catch (error) {
			console.log(error);
		}
	}
}

export function* tradeDetails() {
	while (true) {
		const { payload } = yield take(SEND_TRADE_DETAILS);
		try {
			//In Case of send it to Server
			//Perform Calculation
			const tradeValue = calculateEstimate(payload);
			yield put(addTradeValue(tradeValue));
		} catch (error) {
			console.log(error);
		}
	}
}
