import React from 'react';

const WeatherButton = ({cities, setCity, getCurrentLocation, selectedCity, setSelectedCity }) => {
  const handleCityClick = (item) => {
    setCity(item); // 선택된 도시 업데이트
    setSelectedCity(item); // 선택된 도시 상태 업데이트
  };

  return (
    <div className="button_wrap">
        <ul className="button_list">
         <li className={selectedCity === "" ? "active" : ""} onClick={() => getCurrentLocation()}>current</li>
         {cities.map((item, index) =>(
            <li className={selectedCity === item ? "active" : ""} key={index} onClick={() => handleCityClick(item)}>{item}</li>
         ))}
         </ul>
    </div>
  )
}
export default WeatherButton