import React from 'react'

const WeatherBox = ({weather}) => {
    const temp = weather?.main.temp;
    const fahrenheit = Math.round(temp * 9/5 + 32);
    return (
        <div className='weather-box'>
            <div>{weather?.name}</div>
            <h2>{temp}°C / {fahrenheit}°F</h2>
            <h3>{weather?.weather[0].description}</h3>
        </div>
    )
}

export default WeatherBox