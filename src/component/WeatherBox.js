import React from 'react'

const WeatherBox = ({weather}) => {
   
    return (
        <div className="weather-box">
            <div className="weather-name">{weather?.name}</div>
            <div className="weather-temp">{weather?.main.temp}°C</div>
            <div className="weather-tempInfo">
                <div>
                    <span className="red">{weather?.main.temp_min}°C</span> / <span className="blue">{weather?.main.temp_max}°C</span>
                </div>
                <div>체감 온도 {weather?.main.feels_like}°C</div>
            </div>
            <div className="weather-dec">{weather?.weather[0].description}</div>
        </div>
    )
}

export default WeatherBox