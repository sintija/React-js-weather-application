import React, { Component } from 'react';
import './forecast.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ForecastItemElement from "./ForecastItemElement";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



export default function Forecast() {


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



