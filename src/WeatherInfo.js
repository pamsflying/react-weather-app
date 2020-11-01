import React from "react";
import FormatDate from "./FormatDate";

export default function WeatherInfo(props) {
    return (
    <div className="WeatherInfo">
        <div className="row">
          <div className="col-9">
            <div className="clearfix overview">
              <img src="" alt="Clear" id="icon" class="float-right" />
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

        <div className="row">
          <div className="col-6">
            <div className="clearfix weather-temperature">
              <div className="float-left">
                <strong id="temperature"></strong><span class="units"><a href="#" id="celsius-link"
                    className="active">°C</a> |
                  <a href="#" id="fahrenheit-link">°F</a></span>
              </div>
            </div>
          </div>
          <div class="col-6">
            <ul>
              <li>
                <strong>Humidity: </strong> <span id="humidity"></span>%
              </li>
              <li><strong>Wind: </strong><span id="wind"></span> km/h</li>
            </ul>
          </div>
        </div>
        <div className="row weather-forecast" id="forecast"></div>
      </div>
    )
}
