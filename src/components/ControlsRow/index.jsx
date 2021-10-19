import React, { useState } from 'react';
import './styles.css';

function ControlsRow({ searchWeather }) {
    const [city, setCity] = useState('');

    const handleChange = e => {
        const { value } = e.target;
        setCity(value);
    };

    const handleClick = () => {
        const searchTerm = city.trim();
        if (searchTerm) {
            searchWeather(searchTerm);
        }
    };

    return (
        <div className="controls-row">
            <input name="city" value={city} onChange={handleChange} />
            <button onClick={handleClick}>Get weather</button>
        </div>
    );
}

export default ControlsRow;
