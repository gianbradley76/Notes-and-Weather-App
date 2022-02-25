/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import './Weather.css';
import React, { useState, useEffect } from 'react';
import SearchLocation from './SearchLocation';
import DisplayWeather from './DisplayWeather';

function Weather() {
	const [currentWeather, setCurrentWeather] = useState({});
	const [oneCallWeather, setOneCallWeather] = useState({});

	function searchSuccess(currentWeatherData, oneCallData) {
		setCurrentWeather(currentWeatherData);
		setOneCallWeather(oneCallData);
	}

	return (
		<div className='weather-container'>
			<h2 className='weather--title'>Weather</h2>
			<SearchLocation searchSuccess={searchSuccess} />
			<DisplayWeather
				currentWeather={currentWeather}
				oneCallWeather={oneCallWeather}
			/>
		</div>
	);
}

export default Weather;
