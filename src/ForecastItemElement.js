import React, { Component } from 'react';
import Col from 'react-bootstrap/Col';
// import Image from 'react-bootstrap/Image';
import WeatherIcon from './WeatherIcon';



export default function Forecast() {

    return (
        <Col xs={3}>
            <span className="additional-time">10:00</span>
            {/* <Image className="additonal-weather-icon" src="././images/icons/09d.png" /> */}
            <WeatherIcon className="additonal-weather-icon" code="01d" size={36} />
            <span className="additonal-degree-info">10</span>
        </Col>
    );

} 