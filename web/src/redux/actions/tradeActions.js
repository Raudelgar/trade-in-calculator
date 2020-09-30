export const LOAD_ALL_MAKES = 'LOAD_ALL_MAKES';
export const SET_ALL_MAKES = 'SET_ALL_MAKES';
export const CLEAR_ALL_MAKES = 'CLEAR_ALL_MAKES';
export const LOAD_MODELS_MAKES = 'LOAD_MODELS_MAKES';
export const LOAD_MODELS_MAKES_YEAR = 'LOAD_MODELS_MAKES_YEAR';
export const SET_MODELS_MAKES = 'SET_MODELS_MAKES';
export const CLEAR_MODELS_MAKES = 'CLEAR_MODELS_MAKES';

export function loadAllMakes(year) {
	return {
		type: LOAD_ALL_MAKES,
		payload: year,
	};
}

export function setAllMakes(makes) {
	return {
		type: SET_ALL_MAKES,
		payload: makes,
	};
}

export function clearAllMakes() {
	return {
		type: CLEAR_ALL_MAKES,
		payload: [],
	};
}

export function loadModelsByMakes(make) {
	return {
		type: LOAD_MODELS_MAKES,
		payload: { make },
	};
}

export function loadModelsByMakesAndYear(make, year) {
	return {
		type: LOAD_MODELS_MAKES_YEAR,
		payload: { year, make },
	};
}

export function setModelsByMakes(models) {
	return {
		type: SET_MODELS_MAKES,
		payload: models,
	};
}

export function clearModelsMakes() {
	return {
		type: CLEAR_MODELS_MAKES,
		payload: [],
	};
}
