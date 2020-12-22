import { FETCH_WEATHER } from '../actions/fetch-weather';

export const weatherInfo = (state, action) => {
	switch (action.type) {
		case FETCH_WEATHER: {
			return {
				...state,
				...action.payload,
			};
		}
		default: {
			return {
				...state,
			};
		}
	}
};
export default weatherInfo;
