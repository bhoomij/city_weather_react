// import axios from 'axios';

// const API_KEY = '2739083470924fd32f871fffc9ce21bf';
// const WEATHER_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
// export const FETCH_WEATHER = 'FETCH_WEATHER';

// export function fetchWeather(city) {
//     const url = `${WEATHER_URL}&q=${city},us`;
//     const request = axios.get(url);

//     return {
//         type: FETCH_WEATHER,
//         payload: request
//     }
// }

import axios from 'axios';

const API_KEY = '2739083470924fd32f871fffc9ce21bf';
const WEATHER_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
export const FETCH_WEATHER = 'FETCH_WEATHER';

export const fetchWeather = (city) => async (dispatch) => {
    const url = `${WEATHER_URL}&q=${city},us`;
    let response = await axios.get(url);
    response = response.data;

    if (response.cod === "200") {
        dispatch({ type: FETCH_WEATHER, payload: response });
    }
}