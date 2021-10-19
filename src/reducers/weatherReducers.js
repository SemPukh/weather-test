import { GET_WEATHER_START, GET_WEATHER_SUCCESS, GET_WEATHER_ERROR } from '../actions/types';

const initialState = {
    isLoading: false,
    error: null,
    weather: null
};

function weatherReducer(state = initialState, action) {
    switch (action.type) {
        case GET_WEATHER_START:
            return {
                ...state,
                isLoading: true,
                error: null
            };
        case GET_WEATHER_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: null,
                weather: action.payload
            };
        case GET_WEATHER_ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };
        default:
            return state;
    }
}

export default weatherReducer;
