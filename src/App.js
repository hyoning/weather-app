import { useEffect, useState, useCallback } from 'react';
import WeatherBox from './component/WeatherBox';
import WeatherButton from './component/WeatherButton';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ClipLoader from "react-spinners/ClipLoader";
import WeatherContent from './component/WeatherContent';

const API_KEY = `3c4ba7444f7f53fc1aa950d1752f3d65`

//2. 날씨정보에는 도시, 섭씨, 화씨, 날씨상태
//3. 5개의 버튼이 있다. (1개는 현재위치, 4개는 다른도시)
//4. 도시버튼을 클릭할 때 마다 도시별 날씨가 나온다.
//5. 현재위치 버튼을 누르면 다시 현재 위치 기반의 날씨가 나온다.
//6. 데이터를 들고 오는 동안 로딩 스피너가 돈다.
function App() {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);
  const [selectedCity, setSelectedCity] = useState(""); // 선택된 도시를 나타내는 상태

  const cities = ["paris","new york","tokyo","seoul"]

  const getWeatherByCurrentLocation = useCallback(async (lat, lon) => {
    try{
      let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`;
      let response = await fetch(url);
      let data = await response.json();
      if (data.cod === 200){
        setWeather(data);
        setLoading(false); 
        console.log(data)
      } else{
        throw new Error(data.message)
      }
    } catch (error) {
      setLoading(false); 
    }
  }, []);

  //1. 앱이 실행되자마자 현재 위치 기반의 날씨가 보인다.
  const getCurrentLocation = useCallback(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      getWeatherByCurrentLocation(lat, lon);
    });
  }, [getWeatherByCurrentLocation]);

  const handleCurrentLocationClick = useCallback(() => {
    setLoading(true); // 현재 위치 버튼 클릭 시 로딩 상태를 true로 설정
    setSelectedCity("");
    getCurrentLocation();
  }, [getCurrentLocation]);

  const getWeatherByCity = useCallback(async () => {
    try{
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
      let response = await fetch(url);
      let data = await response.json();
      if (data.cod === 200){
        setWeather(data);
        setLoading(false); 
      } else{
        throw new Error(data.message)    
      }
    } catch{
      setLoading(false); 
    }
  },[city]);

  useEffect(() => {
    if (city) {
      setLoading(true);
      getWeatherByCity();
    } else {
      // city 상태가 비어있다면, 현재 위치 기반 날씨를 가져옴
      setLoading(true);
      getCurrentLocation();
    }
  },[city, getWeatherByCity, getCurrentLocation])

  return (
    <div className="wrap">
      <div className="weather_title">Weather</div>
      {loading?
        <div className="container">
          <ClipLoader color="#1A2D92" loading={loading} size={150}/>
        </div>   : 
        <div className="container">
          <WeatherButton cities={cities} setCity={setCity} getCurrentLocation={handleCurrentLocationClick} selectedCity={selectedCity} setSelectedCity={setSelectedCity}/>
          <WeatherBox weather={weather}/>
          <WeatherContent weather={weather}/>
        </div>
      }  
    </div>
  );
}

export default App;
