/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import SearchLocation from './SearchLocation';

function Weather() {
	const [currentWeather, setCurrentWeather] = useState({});
	const [oneCallWeather, setOneCallWeather] = useState({});

	function searchSuccess(currentWeatherData, oneCallData) {
		setCurrentWeather(currentWeatherData);
		setOneCallWeather(oneCallData);
	}

	console.log('current weather', currentWeather);
	console.log('one call weather', oneCallWeather);

	return (
		<div>
			<h1>Weather</h1>
			<SearchLocation searchSuccess={searchSuccess} />
		</div>
	);
}

export default Weather;
