import { WiThermometer, WiCloud, WiNightClear } from 'react-icons/wi';
import {
	BsCloudDrizzle,
	BsFillCloudRainFill,
	BsSnow,
	BsSunFill,
	BsSunriseFill,
	BsSunsetFill,
} from 'react-icons/bs';

function Weather(props) {
	// Check if props is empty
	if (JSON.stringify(props.currentWeather) === '{}') return null;

	function WeatherIcon() {
		// Day or Night detector
		const currentHour = new Date().getHours();

		switch (props.currentWeather.weather[0].main) {
			case 'Clouds':
				return <WiCloud className='weather--icon' />;
			case 'Clear':
				if (currentHour >= 5 && currentHour <= 18) {
					return <BsSunFill className='weather--icon' />;
				} else {
					return <WiNightClear className='weather--icon' />;
				}
			case 'Drizzle':
				return <BsCloudDrizzle className='weather--icon' />;
			case 'Rain':
				return <BsFillCloudRainFill className='weather--icon' />;
			case 'Snow':
				return <BsSnow className='weather--icon' />;
			case 'Thunderstorm':
				return <WiNightClear className='weather--icon' />;
			default:
				break;
		}
	}

	// Formats from UNIX time which props uses
	function formatTime(unixTime) {
		const formattedTime = new Date(unixTime * 1000);
		return formattedTime.toLocaleTimeString([], {
			hour: 'numeric',
			minute: 'numeric',
		});
	}

	const temperature = props.currentWeather.main.temp;
	const mainWeather = props.currentWeather.weather[0].main;
	const sunriseTime = formatTime(props.currentWeather.sys.sunrise);
	const sunsetTime = formatTime(props.currentWeather.sys.sunset);

	return (
		<div className='weather-info-container'>
			<div className='weather--temperature'>
				<WiThermometer className='weather--icon' />
				<p className='weather-info--text'>
					{temperature}
					<span>°C</span>
				</p>
			</div>
			<div className='weather--current'>
				{WeatherIcon()}
				<p className='weather-info--text'>{mainWeather}</p>
			</div>
			<div className='weather--sunrise'>
				<BsSunriseFill className='weather--icon' />
				<p className='weather-info--text'>{sunriseTime}</p>
			</div>
			<div className='weather--sunset'>
				<BsSunsetFill className='weather--icon' />
				<p className='weather-info--text'>{sunsetTime}</p>
			</div>
		</div>
	);
}

export default Weather;
