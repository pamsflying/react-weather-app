import React from "react";
import FormatDate from "./FormatDate";

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
            <ul>
              <li>
                Humidity: {props.data.humidity}%
              </li>
              <li>
                  Wind: {props.data.wind} km/h</li>
            </ul>
          </div>
        <div className="row weather-forecast"></div>
     </div>
    )
}
