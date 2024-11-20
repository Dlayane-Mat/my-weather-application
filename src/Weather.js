import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [forecast, setForecast] = useState({ ready: false });
  function handleResponse(response) {
    setForecast({
      ready: true,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000),
      iconUrl:
        "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/few-clouds-night.png",
      city: response.data.name,
    });
  }
  if (forecast.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city"
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <h1>{forecast.city}</h1>
        <ul>
          <li>
            <FormattedDate date={forecast.date} />
          </li>
          <li className="text-capitalize">{forecast.description}</li>
        </ul>
        <div className="row mt-3">
          <div className="col-6">
            <div className="clearfix">
              <img
                src={forecast.iconUrl}
                alt={forecast.description}
                className="floate-left"
              />
              <span className="temperature">
                {Math.round(forecast.temperature)}
              </span>
              <span className="unit">"°C</span>
            </div>
            <div className="col-6">
              <ul>
                <li>Humidity : {forecast.humidity}%</li>
                <li>Wind :{forecast.wind}km/h</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "0bd4693b39a661e4b0370fe772t7a9o3";
    const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading..";
  }
}
