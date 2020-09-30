import { combineReducers } from 'redux';
import {
	setAllMakesReducer,
	setModelsByMakesReducer,
	setTradeDetailsReducer,
} from './tradeReducers';

const STATE = {
	allMakes: setAllMakesReducer,
	modelsMake: setModelsByMakesReducer,
	tradeDetails: setTradeDetailsReducer,
};

export default combineReducers(STATE);
