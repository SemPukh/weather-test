import React from 'react';
import CurrentWeather from './CurrentWeather';
import ForecastWeather from './ForecastWeather';

function WeatherRows({ weather, error, isLoading }) {
    if (isLoading) return <div>Loading...</div>;
    if (error) {
        if (error.code && error.code === 404) return <div>City not found</div>;
        return <div>Error has occured</div>;
    }
    if (!weather) return null;

    const { current, forecast } = weather;
    return (
        <>
            <CurrentWeather weather={forecast} city={current.city.name} />
            <ForecastWeather weather={forecast} />
        </>
    );
}

export default WeatherRows;
