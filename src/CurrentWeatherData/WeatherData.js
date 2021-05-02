import React from 'react';
import Image from 'react-bootstrap/Image';
import WeatherIcon from './WeatherIcon';
import Illustration from "../Illustration/illustration";
import Col from 'react-bootstrap/Col';
import Raindrops from '../illustrationImg/raindrops.svg';
import Winds from '../illustrationImg/winds.svg';
import Forecast from '../Forecast/Forecast';


export default function WeatherData(props) {

    return (
        <div className="current-weather">
            <div className="weather-data-rows">
                <Col xs={12} md={5} className="weather-info">
                    <WeatherIcon className="weather-icon" code={props.data.icon} size={54} alt={props.data.description} />
                    <h1>{props.data.city}</h1>
                    <p>{props.data.description}</p>
                    <div className="temperature-data">
                        <p className="temperature" id="current-temperature">
                            {Math.round(props.data.temperature)}</p>
                        <span className="temperature-unit measure" id="temperature-meassure">
                            <span id="degreesCelsius" className="active">°C</span>
                        </span>
                    </div>
                    <div className="wind-humidity-block">
                        <div className="winds">
                            <Image className="weather-icon" src={Winds} />
                            <span className="wind" id="wind-speed"> {props.data.windSpeed} km/h </span>
                        </div>
                        <div className="humidity">
                            <Image className="weather-icon" src={Raindrops} />
                            <span className="wind" id="humidity"> {props.data.humidity} %</span>
                        </div>
                    </div>

                    <div>
                        <p className="addtional-forecast">Check the weather forecast</p>
                    </div>

                    <div>
                        <Forecast coordinates={props.data.coordinates} />
                    </div>





                </Col>
                <Col xs={12} md={6}>
                    <Illustration iconCode={props.data} />
                </Col>
            </div>
        </div >
    );

}    
