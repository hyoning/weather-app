import React from 'react'
import { Button } from 'react-bootstrap';

const WeatherButton = () => {
  return (
    <div >
         <Button variant="warning">Current Location</Button>{' '}
         <Button variant="primary">Paris</Button>{' '}
         <Button variant="success">NewYork</Button>{' '}
    </div>
  )
}

export default WeatherButton