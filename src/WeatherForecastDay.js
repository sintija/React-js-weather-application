import React from 'react'
import WeatherIcon from './WeatherIcon';
import Col from 'react-bootstrap/Col';

export default function WeatherForecastDay(props) {

    function maxTemperature() {
        let temperature = Math.round(props.data.temp.max);
        return `${temperature}°`;
    }

    function day() {
        let date = new Date(props.data.dt * 1000);
        let day = date.getDay();
        let days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
        return days[day];
    }



    return (
        <Col xs={3}>
            <span className="additional-time">{day()}</span>
            {/* <Image className="additonal-weather-icon" src="././images/icons/09d.png" /> */}
            <WeatherIcon className="additonal-weather-icon" code={props.data.weather[0].icon} size={36} />
            <span className="additonal-degree-info">max: {maxTemperature()}</span>
        </Col>
    )
}
