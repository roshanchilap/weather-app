import React, { useState, useEffect } from "react";

const api = {
  base: "https://api.openweathermap.org/data/2.5/",
};

function App() {
  const [weather, setWeather] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("Mumbai");

  const key = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    searchResult();
  }, [query]);

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const searchResult = async () => {
    const res = await fetch(
      `${api.base}weather?q=${query}&units=metric&APPID=${key}`
    );
    const data = await res.json();
    setWeather(data);
    console.log(data);
  };
  require("dotenv").config();
  const dateBuilder = (d) => {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  };

  return (
    <div
      className={
        typeof weather.main != "undefined"
          ? weather.main.temp > 16
            ? "app warm"
            : "app"
          : "app"
      }
    >
      <main>
        <div className="search-box">
          <form onSubmit={getSearch} className="search-form">
            <input
              type="text"
              className="search-bar"
              placeholder="Weather in your city..."
              value={search}
              onChange={updateSearch}
            ></input>
            <button className="searchButton" type="submit">
              Search
            </button>
          </form>
        </div>
        {typeof weather.main != "undefined" ? (
          <div>
            <div className="location-box">
              <div className="location">
                {weather.name}, {weather.sys.country}
              </div>
              <div className="date">{dateBuilder(new Date())}</div>
            </div>
            <div className="weather-box">
              <div className="temp">{Math.round(weather.main.temp)}&deg;c</div>
              <div className="weather">{weather.weather[0].main}</div>
            </div>
          </div>
        ) : (
          ""
        )}
      </main>
    </div>
  );
}

export default App;
