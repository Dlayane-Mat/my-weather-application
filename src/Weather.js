import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather() {
  let [city, setCity] = useState("");
  let [message, setMessage] = useState(false);
  let [weather, setWeather] = useState({});

  function currentCity(event) {
    setCity(event.target.value);
  }

  function showWeather(response) {
    setMessage(true);
    setWeather({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "8402ccd9e55983fce71eeeaa1d2bd1fc";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showWeather);
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Enter a city"
        autofocus
        required
        onChange={currentCity}
      />
      <input type="submit" value="Search" />
    </form>
  );

  if (message) {
    return (
      <div>
        {form}
        <h1 className="City">{city}</h1>
        <ul>
          <li>Thursday 22:00</li>
          <li>{weather.description}</li>
        </ul>
        <p>
          Temperature: {Math.round(weather.temperature)}°C
          <br />
          Humidity: {weather.humidity}%<br />
          Wind: {weather.wind}km/h
          <br />
          <img src={weather.icon} alt={weather.description} />
          <br />
        </p>
      </div>
    );
  } else {
    return form;
  }
}
