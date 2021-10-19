import React, { useCallback } from 'react';
import ControlsRow from '../ControlsRow';
import WeatherRows from '../WeatherRows';
import { connect } from 'react-redux';
import { searchWeather } from '../../actions/weatherActions';
import './styles.css';

function WeatherPageContainer({ weather, searchWeather }) {
    const { isLoading } = weather;

    const handleWeatherSearch = useCallback(
        term => {
            const searchTerm = term.trim ? term.trim() : term;

            if (searchTerm) {
                searchWeather(searchTerm);
            }
        },
        [searchWeather]
    );

    return (
        <div className="weather-container">
            <ControlsRow handleWeatherSearch={handleWeatherSearch} isLoading={isLoading} />
            <WeatherRows {...weather} />
        </div>
    );
}

const mapStateToProps = state => {
    return { weather: state.weather };
};

const mapDispatchToProps = {
    searchWeather
};

export default connect(mapStateToProps, mapDispatchToProps)(WeatherPageContainer);
