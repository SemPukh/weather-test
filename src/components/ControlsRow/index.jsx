import React, { useState, useEffect } from 'react';
import { usePlacesWidget } from 'react-google-autocomplete';
import { setSearchParam, getCityFromQueryParams } from '../../utils';
import './styles.css';

const { REACT_APP_GOOGLE_PLACES_API_KEY } = process.env;

function ControlsRow({ handleWeatherSearch, isLoading }) {
    const [city, setCity] = useState('');

    useEffect(() => {
        const address = getCityFromQueryParams();
        if (address) {
            handleWeatherSearch(address);
            setCity(address);
        } else {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(onSuccess, onError);
            }
            function onSuccess(position) {
                const lat = position.coords.latitude;
                const lon = position.coords.longitude;
                handleWeatherSearch({ lat, lon });
            }
            function onError(error) {
                console.error(error);
            }
        }
    }, [handleWeatherSearch]);

    const handleSelectPlace = (place, inputRef) => {
        const { formatted_address } = place;
        if (!formatted_address) return;

        // To avoid double requests do not fire search request when user enters city manually
        const isInputFocused = document.activeElement === inputRef;
        if (!isInputFocused) handleWeatherSearch(formatted_address);

        setSearchParam(formatted_address);
        setCity(formatted_address);
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

    const handleKeyDown = e => {
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

                <button className="search-button" disabled={isLoading} onClick={() => handleWeatherSearch(city)}>
                    Get weather
                </button>
            </div>
        </div>
    );
}

export default ControlsRow;
