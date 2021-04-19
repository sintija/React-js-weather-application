import React, { useState } from 'react';
import WeatherData from './WeatherData';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './currentWeather.css';
import axios from "axios";
import "./search.css";
import './index.css';

export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ ready: false });
    const [city, setCity] = useState(props.defaultCity);



    function handleResponse(response) {
        // console.log(response.data);
        setWeatherData({
            ready: true,
            temperature: Math.round(response.data.main.temp),
            windSpeed: Math.round(response.data.wind.speed),
            city: response.data.name,
            description: response.data.weather[0].description,
            humidity: response.data.main.humidity,
            // weatherIconUrl: 'http://openweathermap.org/img/wn/01d@2x.png',
            icon: response.data.weather[0].icon,
            date: new Date(response.data.dt * 1000)

        });
    }

    function search() {
        //city
        let apiKey = "790dee98fdf30ad85f31bdecc6a4f41e";
        let apiEndPoint = "https://api.openweathermap.org/data/2.5/weather?";
        let unit = "metric";
        let apiUrl = `${apiEndPoint}q=${city}&appid=${apiKey}&units=${unit}`;
        axios.get(apiUrl).then(handleResponse);
    }

    function handleSubmit(event) {
        event.preventDefault();
        //search for a city 
        search();
    }

    function handleCityChange(event) {
        setCity(event.target.value);
        // alert(city);

    }


    if (weatherData.ready) {
        return (
            <div className="Search">
                <Form onSubmit={handleSubmit}>
                    <Form.Row className="align-items-center">
                        <Col xs={8} className="my-1">
                            <p className="small-message">Check for the weather</p>
                            <Form.Control id="inlineFormInputName" placeholder="" onChange={handleCityChange} />
                        </Col>

                        <Col xs={2} className="my-1">
                            <Button className="search-button" type="submit">Search</Button>
                        </Col>
                    </Form.Row>
                </Form>
                <WeatherData data={weatherData} />
            </div>

        );

    } else {
        search();
        return "Loading";
    }

}




