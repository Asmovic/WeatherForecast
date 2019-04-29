import { combineReducers } from 'redux';
import FetchWeatherReducer from './fetchWeatherReducer';

const rootReducer = combineReducers({
    weather: FetchWeatherReducer,
});

export default rootReducer;
