import React from 'react';
import ControlsRow from '../ControlsRow';
import WeatherRows from '../WeatherRows';
import { connect } from 'react-redux';
import { searchWeather } from '../../actions/weatherActions';
import './styles.css';

function WeatherPageContainer({ weather, searchWeather }) {
    return (
        <div className="weather-container">
            <ControlsRow searchWeather={searchWeather} />
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
