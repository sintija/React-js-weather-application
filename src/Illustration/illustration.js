import React from 'react';
import './illustration.css';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import ImgCold from '../illustrationImg/cold.png';
import ImgSunny from '../illustrationImg/sunny.png';
import ImgNight from '../illustrationImg/night.png';
import ImgCloudy from '../illustrationImg/cloudy.png';
import ImgRain from '../illustrationImg/rain.png';
import ImgThunder from '../illustrationImg/thunder.png';
import ImgSnow from '../illustrationImg/snow.png';
import ImgMisty from '../illustrationImg/misty.png';


export default function Illustration(props) {
    let illustrationData = getIllustration(props.iconCode.icon)

    //change illustration based on weather
    function getIllustration(weatherIcon) {
        let temp = (props.iconCode.temperature);
        let illustrationImg = "";
        switch (weatherIcon) {
            case "01d":
                if (temp < -1) {
                    illustrationImg = ImgCold;
                } else {
                    illustrationImg = ImgSunny;
                }
                break;
            case "01n":
                if (temp < -1) {
                    illustrationImg = ImgCold;
                } else {
                    illustrationImg = ImgNight;
                }
                break;
            case "02d":
            case "02n":
            case "03d":
            case "03n":
            case "04d":
            case "04n":
                if (temp < -1) {
                    illustrationImg = ImgCold;
                } else {
                    illustrationImg = ImgCloudy;
                }
                break;
            case "09d":
            case "09n":
            case "10d":
            case "10n":
                illustrationImg = ImgRain;
                break;
            case "11d":
            case "11n":
                illustrationImg = ImgThunder;
                break;
            case "13d":
            case "13n":
                illustrationImg = ImgSnow;
                break;
            case "50d":
            case "50n":
                if (temp < -1) {
                    illustrationImg = ImgCold;
                } else {
                    illustrationImg = ImgMisty;
                }
                break;
        }
        return illustrationImg;
    }

    return (
        <div>
            <Image src={illustrationData} fluid />
        </div>
    );
}






