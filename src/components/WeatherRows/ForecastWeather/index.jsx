import React from 'react';
import './styles.css';

function ForecastWeather({ weather }) {
    const { daily } = weather;

    return (
        <div className="weekly-weather-info">
            {daily.map((weather, index) => {
                const {
                    humidity,
                    temp,
                    weather: {
                        0: { icon }
                    },
                    dt
                } = weather;
                const minTemp = (temp.min - 273 > 0 ? '+' : '') + (temp.min - 273).toFixed(2);
                const maxTemp = (temp.max - 273 > 0 ? '+' : '') + (temp.max - 273).toFixed(2);

                const iconUrl = 'http://openweathermap.org/img/w/' + icon + '.png';

                const date = new Date(dt * 1000).toGMTString();
                const dayOfWeek = date.slice(0, 3);
                const day = date.slice(5, 11);

                return (
                    <div className="daily-weather-info" key={index}>
                        <div>{dayOfWeek}</div>
                        <div>{day}</div>
                        <img src={iconUrl} alt="" />
                        <div>
                            {minTemp}&deg; ... {maxTemp}&deg;
                        </div>
                        <div>Humidity: {humidity}%</div>
                    </div>
                );
            })}
        </div>
    );
}

export default ForecastWeather;
