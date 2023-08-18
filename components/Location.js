import React from 'react'
import sunny from '../assets/Sunny.svg'
import cloudy from '../assets/Cloudy.svg'
import rainy from '../assets/Rainy.svg'
import partlyCloudy from '../assets/PartlyCloudy.svg'

function Location({ data, location, setLocation }) {
	const foundLocation = data.find((cityObj) => cityObj.city === location)
	const forecastIcons = {
		Sunny: sunny,
		Cloudy: cloudy,
		Rainy: rainy,
		PartlyCloudy: partlyCloudy
	}

	if (!foundLocation) {
		return <h1>Location is not found</h1>
	}
	const iconSrc = forecastIcons[foundLocation.forecast]

	return (
		<div className='card'>
			<h4>Your Location's Weather</h4>
			<div className='img-container'>
				<img
					className='card-img-top'
					src={iconSrc}
					alt='Card image cap'
					id='icon'
				/>
			</div>
			<div class='card-body'>
				<h3 className='card-title'>The weather in {foundLocation.city} is</h3>
				<h5 className='card-text'>{foundLocation.temperature}</h5>
				<h5 className='card-text'>It is {foundLocation.forecast} out today</h5>
			</div>
		</div>
	)
}

export default Location
