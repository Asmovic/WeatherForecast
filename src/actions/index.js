import axios from 'axios';
const API_KEY = 'ffb2f0b85301c8b7c7039a40843cc5c7';
/* const API_KEY = "8fecdddd262f91a026ccee6d22c1827b"; */

export const FETCH_WEATHER = 'FETCH_WEATHER';

const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},NG`;
    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request,
    };
}
