import axios from 'axios';

function fetchCurrentWeather(location) {
	console.log('Fetching weather');
	const API_KEY = '513ca6d73da22c9613ddeccfccb62adb';
	const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`;
	return axios
		.get(API_URL)
		.then((response) => response.data)
		.catch((error) => console.log(error));
}

export default fetchCurrentWeather;
