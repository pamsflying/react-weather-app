import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function search() {
  const apiKey = "1a8d56aa6517b3082b1bfda38d96da23";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
}


  if (weatherData.ready) {
    return (
      <div className="Weather">
      <form onSubmit={handleSubmit} className="mb-3">
        <div className="row">
          <div className="col-8">
            <input
              type="search"
              onChange={updateCity}
              placeholder="Search for a city.."
              className="form-control"
              autoComplete="off"
            />
          </div>

          <button type="submit" className="btn btn-light mr-1">
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              className="bi bi-search"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.442 10.442a1 1np 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"
              />
              <path
                fillRule="evenodd"
                d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"
              />
            </svg>
          </button>

          <button className="btn btn-light" type="submit">
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              className="bi bi-cursor-fill"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z"
              />
            </svg>
          </button>
        </div>
      </form>
      <WeatherInfo data={weatherData}/>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}