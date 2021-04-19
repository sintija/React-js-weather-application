import React, { Component } from 'react';
import './forecast.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ForecastItemElement from "./ForecastItemElement";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from "axios";


export default function Forecast(props) {

    function handleResponse(response) {

    }

    let apiKey = "790dee98fdf30ad85f31bdecc6a4f41e";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return (

        <div className="forecast-block">

            <Row className="forecast-items">
                <Col xs={2}>
                    < ForecastItemElement />
                </Col>
                <Col xs={2}>
                    <ForecastItemElement />
                </Col>
                <Col xs={2}>
                    <ForecastItemElement />
                </Col>
                <Col xs={2}>
                    <ForecastItemElement />
                </Col>


            </Row>



        </div>
    );


}



