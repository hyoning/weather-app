import React from 'react'
import { Button } from 'react-bootstrap';

const WeatherButton = ({cities, setCity, getCurrentLocation}) => {
  return (
    <div className='button_wrap'>
         <Button variant="warning" onClick={() => getCurrentLocation()}>current</Button>{' '}
         {cities.map((item, index) =>(
            <Button
                variant="warning"
                key={index}
                onClick={() => setCity(item)}
            >{item}
            </Button>
         ))}
    </div>
  )
}

export default WeatherButton