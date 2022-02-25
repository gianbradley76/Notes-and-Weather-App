import React, { useState } from 'react';
import fetchCurrentWeather from './fetchCurrentWeather';
import fetchOneCallWeather from './fetchOneCallWeather';

function SearchLocation(props) {
	const [searchText, setSearchText] = useState('');

	function handleChange(event) {
		setSearchText(event.target.value);
	}

	async function HandleClick() {
		const currentWeatherData = await fetchCurrentWeather(searchText);
		const coordinates = { ...currentWeatherData.coord };
		const oneCallData = await fetchOneCallWeather(coordinates);

		props.searchSuccess(currentWeatherData, oneCallData);
	}

	return (
		<div>
			<input
				type='text'
				name='city'
				onChange={handleChange}
				value={searchText}
			/>
			<button onClick={HandleClick}>Button</button>
		</div>
	);
}

export default SearchLocation;
