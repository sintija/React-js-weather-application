import React from 'react';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import WeatherIcon from './WeatherIcon';
import Col from 'react-bootstrap/Col';


export default function WeatherData(props) {

    return (
        <div className="current-weather">
            <Row>
                <Col xs={12} className="city-name">
                    <h1>{props.data.city}</h1>
                </Col>

                <Col xs={12} className="weather-description text-capitalize">
                    {/* <FormattedDate date={weatherData.date} /> */}
                </Col>
                <Col xs={12} className="weather-description text-capitalize">
                    <p>{props.data.description}</p>
                </Col>
            </Row>
            <WeatherIcon className="weather-icon" code={props.data.icon} size={54} alt={props.data.description} />
            <Row className="temerature-block">
                <p className="temperature" id="current-temperature">
                    {Math.round(props.data.temperature)}</p>
                <span className="temperature-unit measure" id="temperature-meassure">
                    <span id="degreesCelsius" className="active">°C</span>
                </span>
            </Row>
            <Row className="row additional-weather-info">
                <Col xs={4}>
                    <Image className="weather-icon" src="././images/icons/winds.svg" />
                    <span className="wind" id="wind-speed"> {props.data.wind} km/h </span>
                </Col>

                <Col xs={4}>
                    <Image className="weather-icon" src="././images/icons/raindrops.svg" />
                    <span className="wind" id="humidity"> {props.data.humidity} %</span>
                </Col>
            </Row>
            <Row>
                <Col xs={12}>
                    <p className="addtional-forecast">Check the weather forecast</p>
                </Col>
            </Row>
        </div>
    );

}    