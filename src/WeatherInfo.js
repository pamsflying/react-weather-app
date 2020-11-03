import React from "react";
import FormatDate from "./FormatDate";
import WeatherTemperature from "./WeatherTemperature";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
    return (
    <div className="WeatherInfo">
        <div className="row">
          <div className="col-9">
            <div className="clearfix overview">
            <WeatherIcon code={props.data.icon} />
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
          <div className="clearfix"></div>
        <WeatherTemperature celsius={props.data.temperature} />

            
          <ul>
            <li className="humidity">
                <strong>Humidity:</strong> {props.data.humidity}%
            </li>
            <li className="wind">
                  <strong>Wind:</strong> {props.data.wind} km/h
            </li>
          </ul>
        </div>
      </div>
      </div>
   

   
  );
}