import React, { useState, useEffect } from 'react';
import './styles.css';

function ControlsRow({ searchWeather, isLoading }) {
    const [city, setCity] = useState('');

    useEffect(() => {
        const search = window.location.search || '';
        if (search) {
            const searchSplit = search.split('search=');
            const searchTerm = searchSplit[searchSplit.length - 1];
            const parsedSearchTerm = decodeURIComponent(searchTerm);

            if (parsedSearchTerm) {
                setCity(parsedSearchTerm.trim());
                handleWeatherSearch(parsedSearchTerm);
            }
        }
    }, []);

    const handleChange = e => {
        const { value } = e.target;
        setCity(value);

        const nextUrl = window.location.pathname + '?search=' + encodeURIComponent(value.trim());
        window.history.pushState(null, '', nextUrl);
    };

    const handleWeatherSearch = (term = city) => {
        const searchTerm = term.trim();
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
                <button className="search-button" disabled={isLoading} onClick={() => handleWeatherSearch}>
                    Get weather
                </button>
            </div>
        </div>
    );
}

export default ControlsRow;
