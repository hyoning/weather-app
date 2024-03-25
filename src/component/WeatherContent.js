import React from 'react'

const WeatherContent = ({weatherWeek}) => {
    const getDayFromDate = (date, idx) => {
        // '일' 부분만 추출하기 위해 substring 메소드 사용
        const day = date.substring(8, 10);
        const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        const dateObj = new Date(date);
        const weekDay = weekDays[dateObj.getDay()]; 

        // 첫 번째 아이템인 경우 "오늘" 문구 반환
        if (idx === 0) {
            return (<><span className='dayIdx blue'>오늘</span><span>{day}</span> </>);
        } else if(idx === 1){
            return (<><span className='dayIdx'>내일</span><span>{day}</span> </>);
        }
        else {
            return (<><span className='dayIdx'>{weekDay}</span><span>{day}</span> </>);
        }
    };
  return (
    <div className="weatherContents">
        <div className="weatherWeek-title">일별예보</div>
        <ul className="weatherWeek-box">
        {weatherWeek?.map((item, idx) => (
            <li key={idx}>
               <div className="weatherWeek-day">{getDayFromDate(item.dt_txt, idx)}</div>
               <div className="weatherWeek-images"><img src={`/images/${item.weather[0].icon}.png`} alt='날씨 아이콘'/></div>
               <div className="weatherWeek-temp">{Math.floor(item.main.temp)}°C</div>
            </li>
             )
        )}
        </ul>
    </div>
  )
}

export default WeatherContent