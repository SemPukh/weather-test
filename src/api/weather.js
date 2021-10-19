const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export const fetchCityInfo = term => {
    const url = `${BASE_URL}/forecast?q=${term}&appid=${process.env.REACT_APP_API_KEY}`;
    return fetch(url);
};

export const fetchWeatherForecast = ({ lat, lon }) => {
    const url = `${BASE_URL}/onecall?appid=${process.env.REACT_APP_API_KEY}&lat=${lat}&lon=${lon}`;
    return fetch(url);
};
