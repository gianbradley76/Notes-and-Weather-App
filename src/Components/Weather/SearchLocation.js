/* eslint-disable jsx-a11y/alt-text */
import { MdLocationOn, MdSearch } from 'react-icons/md';
import React, { useState } from 'react';
import fetchCurrentWeather from './fetchCurrentWeather';
import fetchOneCallWeather from './fetchOneCallWeather';

function SearchLocation(props) {
	const [searchText, setSearchText] = useState('');
	const [searchActive, setSearchActive] = useState(false);

	function handleChange(event) {
		setSearchText(event.target.value);
	}

	function handleFocus() {
		setSearchActive(true);
	}

	function handleBlur() {
		setSearchActive(false);
	}

	async function SearchLocation(event) {
		if (event.key === 'Enter') {
			const currentWeatherData = await fetchCurrentWeather(searchText);
			const coordinates = { ...currentWeatherData.coord };
			const oneCallData = await fetchOneCallWeather(coordinates);

			props.searchSuccess(currentWeatherData, oneCallData);
			console.log(event.target.value);
		}
	}

	return (
		<div
			className={`weather-search ${
				searchActive ? 'weather-search-active' : ''
			}`}
		>
			{searchActive ? (
				<MdSearch className='weather---location-icon' />
			) : (
				<MdLocationOn className='weather--search-icon' />
			)}
			<input
				className='weather-search--input'
				type='text'
				name='city'
				placeholder='Location'
				onChange={handleChange}
				onFocus={handleFocus}
				onBlur={handleBlur}
				value={searchText}
				onKeyDown={SearchLocation}
			/>
		</div>
	);
}

export default SearchLocation;
