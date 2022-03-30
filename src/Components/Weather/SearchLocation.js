/* eslint-disable jsx-a11y/alt-text */
import { MdLocationOn, MdSearch } from 'react-icons/md';
import React, { useState } from 'react';
import fetchCurrentWeather from './fetchCurrentWeather';

function SearchLocation(props) {
	const [searchText, setSearchText] = useState('');
	const [searchActive, setSearchActive] = useState(false);

	const handleChange = (event) => {
		setSearchText(event.target.value);
	};

	const handleFocus = () => {
		setSearchActive(true);
	};

	const handleBlur = () => {
		setSearchActive(false);
	};

	async function SearchLocation(event) {
		// Doesn't search location if input is empty
		if (searchText === '') return;

		// Search location if input is not empty
		if (event.key === 'Enter') {
			const currentWeatherData = await fetchCurrentWeather(searchText);
			props.searchSuccess(currentWeatherData);
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
