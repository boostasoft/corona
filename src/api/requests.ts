import {API_URL} from './constants';

export const getAllCountriesStats = (withTimeline: boolean = false) => {
	return fetch(`${API_URL}/countries${withTimeline? '?include=timeline' : ''}`, {
		method: 'GET',
		headers: {
			Accept: 'application/json',
		},
	});
};

export const getAllCountriesStatsWithTimeline = (withTimeline: boolean = false) => {
	return getAllCountriesStats(true);
};


export const getCountryStats = (iso3: string) => {
	return fetch(`${API_URL}/countries/${iso3}`, {
		method: 'GET',
		headers: {
			Accept: 'application/json',
		},
	});
};

export const getGlobalTimeline = () => {
	return fetch(`${API_URL}/timeline`, {
		method: 'GET',
		headers: {
			Accept: 'application/json',
		},
	});
}