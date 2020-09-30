import {
	ADD_TRADE_VALUE,
	CLEAR_ALL_MAKES,
	CLEAR_MODELS_MAKES,
	CLEAR_TRADE_DETAILS,
	SEND_TRADE_DETAILS,
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

export function setTradeDetailsReducer(state = {}, { type, payload }) {
	switch (type) {
		case SEND_TRADE_DETAILS:
			return payload;
		case ADD_TRADE_VALUE:
			return {
				...state,
				tradeValue: payload,
			};
		case CLEAR_TRADE_DETAILS:
			return payload;
		default:
			return state;
	}
}
