import React from 'react';
import CurrentWeather from './CurrentWeather';
import ForecastWeather from './ForecastWeather';

function WeatherRows({ weather, error, isLoading }) {
    if (isLoading) return <div>Loading...</div>;
    if (error) {
        if (error.code && error.code === 404) return <div>City not found</div>;
        return <div>Error has occured</div>;
    }
    if (!weather) return <div>Please input a city and click 'Get weather' button</div>;

    const { current, forecast } = weather;
    return (
        <div>
            <CurrentWeather weather={forecast} city={current.city.name} />
            <ForecastWeather weather={forecast} />
        </div>
    );
}

export default WeatherRows;
