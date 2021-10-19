export const formatTemperature = temp => {
    const tempInCelsius = Math.round(temp - 273);
    const prefix = tempInCelsius > 0 ? '+' : '';
    return prefix + tempInCelsius;
};
