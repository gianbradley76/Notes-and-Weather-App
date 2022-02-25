import axios from 'axios';

function fetchOneCallWeather(coordinates) {
	const API_KEY = '513ca6d73da22c9613ddeccfccb62adb';
	const API_URL = `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&&appid=${API_KEY}`;

	return axios
		.get(API_URL)
		.then((response) => response.data)
		.catch((error) => console.log(error));
}

export default fetchOneCallWeather;
