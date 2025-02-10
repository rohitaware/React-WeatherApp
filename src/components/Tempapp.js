import React, { useEffect, useState } from "react";
import "./css/style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStreetView } from "@fortawesome/free-solid-svg-icons";

const Tempapp = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("Pune");

  useEffect(() => {
    const fetchApi = async () => {
      
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=092c10d4a9b4327f5031bcaa1398877a`;
        const response = await fetch(url);
        const resJson = await response.json();

        setCity(resJson.main);
    
    };
    fetchApi();
  }, [search]);

  return (
    <>
      <div className="box">
        <div className="inputData">
          <input
            type="search"
            value={search}
            className="inputFeild"
            placeholder="Search city..."
            onChange={(event) => setSearch(event.target.value)}
          />
        </div>

        {!city ? (
          <p className="errorMsg">No Data Found</p>
        ) : (
          <div>
            <div className="info">
              <h2 className="location">
                <FontAwesomeIcon icon={faStreetView} size="1x" /> {search}
              </h2>
              <h1 className="temp">{(city.temp - 273.15).toFixed(2)}°C</h1>
              <h3 className="tempmin_max">
                Min: {(city.temp_min - 273.15).toFixed(2)}°C | Max: {(city.temp_max - 273.15).toFixed(2)}°C
              </h3>
            </div>
            <div className="wave -one"></div>
            <div className="wave -two"></div>
            <div className="wave -three"></div>
          </div>
        )}
      </div>
    </>
  );
};

export default Tempapp;
