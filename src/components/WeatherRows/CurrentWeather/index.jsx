import React from 'react';
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

    const iconUrl = 'http://openweathermap.org/img/w/' + icon + '.png';

    const temperature = (temp - 273 > 0 ? '+' : '') + (temp - 273).toFixed(2);
    const temperatureFeelsLike = (feels_like - 273 > 0 ? '+' : '') + (feels_like - 273).toFixed(2);

    return (
        <div className="weather-info-container">
            <div>
                <div>City: {city}</div>
                <div>Temperature: {temperature}</div>
                <div>Feels like: {temperatureFeelsLike}</div>
                <div>Humidity: {humidity}</div>
            </div>
            <img src={iconUrl} alt="" />
        </div>
    );
}

export default CurrentWeather;
