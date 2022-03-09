import { useState, useEffect } from 'react';

function DisplayDateTime() {
	const [dateTime, setDateTime] = useState(new Date());

	useEffect(() => {
		const timer = setInterval(() => {
			setDateTime(new Date());
		}, 3000);

		return () => {
			clearInterval(timer);
		};
	}, []);

	const date = dateTime.toLocaleDateString([], {
		day: '2-digit',
		month: 'short',
	});

	const day = dateTime.toLocaleDateString('en', { weekday: 'short' });

	const time = dateTime.toLocaleTimeString('en', {
		hour: 'numeric',
		hour12: false,
		minute: 'numeric',
	});

	return (
		<div className='date-time-conatiner'>
			<p className='date-time--day'>{`${day}, ${date}`}</p>
			<p className='date-time--time'>{time}</p>
		</div>
	);
}

export default DisplayDateTime;
