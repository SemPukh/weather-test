import React from 'react';
import { formatTemperature } from '../../../utils';
import './styles.css';

function CurrentWeather({ weather, city }) {
    const { current } = weather;
    const {
        temp,
        humidity,
        feels_like,
        weather: {
            0: { icon }
        }
    } = current;

    const iconUrl = 'https://openweathermap.org/img/w/' + icon + '.png';

    const temperature = formatTemperature(temp)
    const temperatureFeelsLike = formatTemperature(feels_like)

    return (
        <div className="weather-info-container">
            <div>
                <div>City: {city}</div>
                <div>Temperature: {temperature}&deg;</div>
                <div>Feels like: {temperatureFeelsLike}&deg;</div>
                <div>Humidity: {humidity}%</div>
            </div>
            <img src={iconUrl} alt="" />
        </div>
    );
}

export default CurrentWeather;
