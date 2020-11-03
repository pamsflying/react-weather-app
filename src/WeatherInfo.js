import React from "react";
import FormatDate from "./FormatDate";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
    return (
    <div className="WeatherInfo">
        <div className="row">
          <div className="col-9">
            <div className="clearfix overview">
              <img src="" alt="Clear" id="icon" className="float-right" />
                <div className="float-left">
                <h1>{props.data.city}</h1>
                    <ul>
                        <li>
                        <FormatDate date={props.data.date} /> 
                        </li>
                  <li>{props.data.description}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

          <div class="col-6">
            <WeatherTemperature celsius={props.data.temperature} />
            <ul>
              <li className="humidity">
                Humidity: {props.data.humidity}%
              </li>
              <li className="wind">
                  Wind: {props.data.wind} km/h</li>
            </ul>
          </div>
        <div className="row weather-forecast"></div>
     </div>
    )
}
