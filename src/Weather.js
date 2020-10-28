import React from "react";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    temperature: "52",
    date: "Tuesday at 7:00",
    description: "Cloudy",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
    humidity: 80,
    wind: 10
  };

  return (
    <div>
      <div>
        <ul>
          <li>Last updated on: {weatherData.date}</li>
          <li>{weatherData.description}</li>
        </ul>
      </div>

      <div className="row">
        <div className="col-6">
          <div className="clearfix weather-temperature">
            <div className="float-left">
              <strong>{weatherData.temperature}</strong>
              <span className="units">
                <a href="/">°C</a> | <a href="/">°F</a>
              </span>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>
              <strong>Humidity: </strong> {weatherData.humidity}%
            </li>
            <li>
              <strong>Wind: </strong> {weatherData.wind} km/h
            </li>
          </ul>
        </div>
      </div>
      <div className="row weather-forecast"></div>
    </div>
  );
}
