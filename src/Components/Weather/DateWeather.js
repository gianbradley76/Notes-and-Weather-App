/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import './DateWeather.css';
import React, { useState, useEffect } from 'react';
import SearchLocation from './SearchLocation';
import Weather from './Weather';
import DateTime from './DateTime';

function DateWeather() {
	const [currentWeather, setCurrentWeather] = useState({});

	function searchSuccess(currentWeatherData) {
		setCurrentWeather(currentWeatherData);
	}

	return (
		<div className='date-weather-container'>
			<DateTime />
			<div className='weather-container'>
				<SearchLocation searchSuccess={searchSuccess} />
				<Weather currentWeather={currentWeather} />
			</div>
		</div>
	);
}

export default DateWeather;
