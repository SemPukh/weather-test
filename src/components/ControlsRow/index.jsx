import React, { useState } from 'react';
import './styles.css';

function ControlsRow({ searchWeather, isLoading }) {
    const [city, setCity] = useState('');

    const handleChange = e => {
        const { value } = e.target;
        setCity(value);
    };

    const handleWeatherSearch = () => {
        const searchTerm = city.trim();
        if (searchTerm) {
            searchWeather(searchTerm);
        }
    };

    const handleKeyDown = e => {
        if (e.key === 'Enter') {
            handleWeatherSearch();
        }
    };

    return (
        <div className="control-row-container">
            <div className="controls-row">
                <input
                    placeholder="City"
                    className="search-input"
                    name="city"
                    value={city}
                    onKeyDown={handleKeyDown}
                    onChange={handleChange}
                />
                <button className="search-button" disabled={isLoading} onClick={handleWeatherSearch}>
                    Get weather
                </button>
            </div>
        </div>
    );
}

export default ControlsRow;
