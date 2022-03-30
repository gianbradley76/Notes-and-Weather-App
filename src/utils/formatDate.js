function formatDate(d) {
	const date = d.toLocaleDateString([], {
		day: '2-digit',
		month: 'short',
	});

	const day = d.toLocaleDateString('en', { weekday: 'short' });

	return `${day}, ${date}`;
}

export default formatDate;
