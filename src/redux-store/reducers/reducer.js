import { combineReducers } from 'redux';
import weatherInfo from './weatherReducer';

//conbine reducers
const reducers = combineReducers({
	weatherInfo: weatherInfo,
});
export default reducers;
