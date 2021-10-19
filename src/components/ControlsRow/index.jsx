import React, { useState, useEffect } from 'react';
import { usePlacesWidget } from 'react-google-autocomplete';
import { setSearchParam, getCityFromQueryParams } from '../../utils';
import './styles.css';

const { REACT_APP_GOOGLE_PLACES_API_KEY } = process.env;

function ControlsRow({ searchWeather, isLoading }) {
    const [city, setCity] = useState('');

    useEffect(() => {
        const address = getCityFromQueryParams();
        if (address) {
            handleWeatherSearch(address);
            setCity(address);
        }
    }, []);

    const handleSelectPlace = place => {
        const { formatted_address } = place;
        if (!formatted_address) return;

        handleWeatherSearch(formatted_address);
        setSearchParam(formatted_address);
    };

    const { ref } = usePlacesWidget({
        apiKey: REACT_APP_GOOGLE_PLACES_API_KEY,
        onPlaceSelected: handleSelectPlace,
        defaultValue: getCityFromQueryParams()
    });

    const handleChange = e => {
        const { value } = e.target;
        setCity(value);
        setSearchParam(value.trim());
    };

    const handleWeatherSearch = (term = city) => {
        const searchTerm = term.trim();

        if (searchTerm) {
            searchWeather(searchTerm);
        }
    };

    const handleKeyDown = e => {
        console.log('val: ', e.target.value);
        if (e.key === 'Enter') {
            handleWeatherSearch(e.target.value);
            handleChange(e);
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
                    ref={ref}
                />

                <button className="search-button" disabled={isLoading} onClick={() => handleWeatherSearch()}>
                    Get weather
                </button>
            </div>
        </div>
    );
}

export default ControlsRow;
