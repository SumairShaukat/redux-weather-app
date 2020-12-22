import { combineReducers } from 'redux';
import { weatherInfo } from './weather-reducer';

//conbine reducers
const reducers = combineReducers({
	weatherInfo: weatherInfo,
});
export default reducers;
