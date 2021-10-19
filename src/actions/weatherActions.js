import { GET_WEATHER_START, GET_WEATHER_SUCCESS, GET_WEATHER_ERROR } from './types';
import { fetchCityInfo, fetchWeatherForecast } from '../api';

export const searchWeather = searchTerm => async dispatch => {
    dispatch({ type: GET_WEATHER_START });

    try {
        const current = await fetchCityInfo(searchTerm).then(data => data.json());
        if (current.cod === '404') {
            throw { code: 404 };
        }
        const { coord } = current.city;
        const forecast = await fetchWeatherForecast(coord).then(data => data.json());
        dispatch({ type: GET_WEATHER_SUCCESS, payload: { current, forecast } });
    } catch (error) {
        dispatch({ type: GET_WEATHER_ERROR, payload: error });
        console.error(error);
    }
};
