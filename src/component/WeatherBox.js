import React from 'react'

const WeatherBox = ({weather}) => {
   
    return (
        <div className="weather-box">
            <div className="weather-name">{weather?.name}</div>
            <div className="weather-image"><img src={`/images/${weather?.weather[0].icon}.png`} alt='날씨 아이콘'/></div>
            <div className="weather-dec">{weather?.weather[0].description}</div>
            <div className="weather-temp">{Math.floor(weather?.main.temp)}°C</div>
            <div className="weather-tempInfo">
                    <span className="red">{Math.floor(weather?.main.temp_min)}°C</span> / <span className="blue">{Math.floor(weather?.main.temp_max)}°C</span>
            </div>
            <div className="weather_feels">체감 온도 {Math.floor(weather?.main.feels_like)}°C</div>
            <div className="weather_humidity">습도 {weather?.main.humidity}%</div>
        </div>
    )
}

export default WeatherBox