import React, { useState, useEffect } from 'react';
import './forecast.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import WeatherForecastDay from './WeatherForecastDay';




export default function Forecast(props) {

    const [loaded, setLoaded] = useState(false);
    const [forecast, setForecast] = useState(null);

    useEffect(() => {
        setLoaded(false);

    }, [props.coordinates]);

    function handleResponse(response) {
        // console.log(response.data);
        setForecast(response.data.daily);
        setLoaded(true);

    }


    if (loaded) {

        return (
            <div className="forecast-block">

                <div className="forecast-items">
                    {forecast.map(function (dailyForecast, index) {
                        if (index < 4) {
                            return (

                                <div key={index}>
                                    <WeatherForecastDay data={dailyForecast} />
                                </div>
                            );

                        } else {
                            return null;
                        }
                    })}
                </div>
            </div>
        );

    } else {
        let apiKey = "790dee98fdf30ad85f31bdecc6a4f41e";
        let longitude = props.coordinates.lon;
        let latitude = props.coordinates.lat;
        let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);

        return "loading";


    }





}



