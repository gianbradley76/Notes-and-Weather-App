import { useState, useEffect } from 'react';
import formatDate from '../../utils/formatDate';

function DisplayDateTime() {
	const [dateTime, setDateTime] = useState(new Date());

	useEffect(() => {
		const timer = setInterval(() => {
			setDateTime(new Date());
		}, 1000);

		return () => {
			clearInterval(timer);
		};
	}, []);

	const time = dateTime.toLocaleTimeString('en', {
		hour: 'numeric',
		hour12: false,
		minute: 'numeric',
	});

	return (
		<div className='date-time-conatiner'>
			<p className='date-time--day'>{formatDate(dateTime)}</p>
			<p className='date-time--time'>{time}</p>
		</div>
	);
}

export default DisplayDateTime;
