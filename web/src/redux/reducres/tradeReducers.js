import {
	CLEAR_ALL_MAKES,
	CLEAR_MODELS_MAKES,
	SET_ALL_MAKES,
	SET_MODELS_MAKES,
} from '../actions/tradeActions';

export function setAllMakesReducer(state = [], { type, payload }) {
	switch (type) {
		case SET_ALL_MAKES:
			return payload;
		case CLEAR_ALL_MAKES:
			return payload;
		default:
			return state;
	}
}

export function setModelsByMakesReducer(state = [], { type, payload }) {
	switch (type) {
		case SET_MODELS_MAKES:
			return payload;
		case CLEAR_MODELS_MAKES:
			return payload;
		default:
			return state;
	}
}
