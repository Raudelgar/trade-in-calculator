import axios from 'axios';
import { formatDropdownData } from './dataHelper';
import { api } from './v1/api';

let base_url;

if (process.env.NODE_ENV === 'development') {
	base_url = api.local;
} else {
	base_url = window.location.origin;
}

/**
 * API - /vehicle/makes
 */
export const getAllMakes = async (year) => {
	const URL = `${base_url}${api.allMakes}`;
	const CONFIG = {
		baseURL: base_url,
	};
	const response = await axios.get(URL, CONFIG);
	return formatDropdownData(response.data, 'Make').slice(0, 300);
};

/**
 * API - /vehicle/models/${make}
 */
export const getModelsForMake = async ({ make }) => {
	const URL = `${base_url}${api.modelsByMake}/${make}`;
	const CONFIG = {
		baseURL: base_url,
	};
	const response = await axios.get(URL, CONFIG);
	return formatDropdownData(response.data, 'Model');
};

/**
 * API - /vehicle/models/${make}/${year}
 */
export const getModelsForMakeYear = async ({ year, make }) => {
	const URL = `${base_url}${api.modelsByMakeAndYear}/${make}/${year}`;
	const CONFIG = {
		baseURL: base_url,
	};
	const response = await axios.get(URL, CONFIG);
	return formatDropdownData(response.data, 'Model');
};
