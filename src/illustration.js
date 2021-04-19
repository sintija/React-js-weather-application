import React, { Component } from 'react';
import './illustration.css';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';


export default function Illustration() {
    return (

        <div className="illustration">
            <Col xs={12} md={4} >
                <Image className="main-weather-icon" src="././images/icons/09d.png" />
            </Col>

            <Col className="illustration-img" xs={12} md={4}>
                <Image src="././images/illustrations/rain.png" fluid />
            </Col>
        </div>
    );
}
