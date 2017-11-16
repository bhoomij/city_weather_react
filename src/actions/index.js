import axios from 'axios';

const API_KEY = '2739083470924fd32f871fffc9ce21bf';
const WEATHER_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${WEATHER_URL}&q=${city},us`;
    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    }
}

// function createResponse(resonse) {
//     return {
//         type: FETCH_WEATHER,
//         payload: resonse
//     }
// }

// export function fetchWeather(city) {
//     return (dispatch, getState) => {

//         const url = `${WEATHER_URL}&q=${city},us`;
//         return axios.get(url).then(function (res) {
//             dispatch(createResponse(res));
//         }).catch(function (err) {
//             dispatch(createResponse(err));
//         });
//     };
// }