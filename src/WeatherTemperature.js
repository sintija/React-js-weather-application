import React, { useState } from 'react';

export default function WeatherTemperature(props) {
    const [unit, setUnit] = useState("celsius");

    function showFahrenheit(event) {
        event.preventDefault();
        setUnit("fahrenheit");
    }

    function showCelsius(event) {
        event.preventDefault();
        setUnit("celsius");
    }

    function fahrenheit() {
        return (props.temperature * 9 / 5) + 32;
    }

    if (unit === "celsius") {
        return (
            <>
                <p className="temperature" id="current-temperature">
                    {fahrenheit()}</p>
                <span className="temperature-unit measure" id="temperature-meassure">
                    <a id="degreesCelsius" className="active" href="">°C</a>|
        <a id="degreesFahr" className="inactive" href="" onClick={showFahrenheit}>°F</a>
                </span>
            </>
        );

    } else {

        <>
            <p className="temperature" id="current-temperature">
                {props.temperature}</p>
            <span className="temperature-unit measure" id="temperature-meassure">
                <a id="degreesCelsius" className="inactive" href="" onClick={showCelsius}>°C</a>|
        <a id="degreesFahr" className="active" href="" >°F</a>
            </span>
        </>
    }

}