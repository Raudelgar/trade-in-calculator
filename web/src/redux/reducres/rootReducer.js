import { combineReducers } from 'redux';
import { setAllMakesReducer, setModelsByMakesReducer } from './tradeReducers';

const STATE = {
	allMakes: setAllMakesReducer,
	modelsMake: setModelsByMakesReducer,
};

export default combineReducers(STATE);
