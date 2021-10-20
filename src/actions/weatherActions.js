import { GET_WEATHER_START, GET_WEATHER_SUCCESS, GET_WEATHER_ERROR } from './types';
import { fetchCityInfoByName, fetchWeatherForecast, fetchCityInfoByCoordinates } from '../api';

export const searchWeather = searchTerm => async dispatch => {
    dispatch({ type: GET_WEATHER_START });

    const searchByCoordinates = searchTerm instanceof Object;
    const fetchCity = searchByCoordinates ? fetchCityInfoByCoordinates : fetchCityInfoByName;

    try {
        const current = await fetchCity(searchTerm).then(data => data.json());
        if (current.cod === '404') {
            throw { code: 404 };
        }
        const { coord } = current.city;
        const forecast = await fetchWeatherForecast(coord).then(data => data.json());
        const payload = { current, forecast };
        dispatch({ type: GET_WEATHER_SUCCESS, payload });
        return payload;
    } catch (error) {
        dispatch({ type: GET_WEATHER_ERROR, payload: error });
        console.error(error);
    }
};
