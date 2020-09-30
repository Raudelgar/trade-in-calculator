import { take, call, put } from 'redux-saga/effects';
import {
	LOAD_ALL_MAKES,
	LOAD_MODELS_MAKES,
	LOAD_MODELS_MAKES_YEAR,
	setAllMakes,
	setModelsByMakes,
} from '../redux/actions/tradeActions';
import {
	getAllMakes,
	getModelsForMake,
	getModelsForMakeYear,
} from '../routes/services';

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
