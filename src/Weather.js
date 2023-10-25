import React, {useState} from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
   
    const [weatherData, setWeatherData] = useState({ready:false});

    function handleResponse(response){
        
        setWeatherData({
            ready:true,
          temperature: response.data.main.temp,
          humidity: response.data.main.humidity,
          wind: response.data.wind.speed,
          city: response.data.name,
          description: response.data.weather[0].description,
          icon: "https://ssl.gstatic.com/onebox/weather/64/rain_s_cloudy.png",
        });

    }
    if (weatherData.ready){
        return(
            <div className="Weather">
        <form>
            <div className="row">
                <div className="col-9">
                    <input type="search" placeholder="Enter a city..." className="form-control" autoFocus="on"/>
                </div>
                <div className="col-3">
                    <input type="submit" value="Search" className="btn btn-primary w-100"/>
                </div>
            </div>
        </form>
      <h1>{weatherData.city}</h1>
      <ul>
        <li>Wednesday, 10:00</li>
        <li>Mostly cloudy</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src={weatherData.icon}
            alt={weatherData.description}
          />
          <span className="temperature">{Math.round(weatherData.temperature)}</span>
          <span className="unit">°C</span>
           
          </div>
          <div className="col-6">
            <ul>
              <li>Precipitation: 80%</li>
              <li>Humidity: {weatherData.humidity} %</li>
              <li>Wind: {weatherData.wind} km/h</li>
            </ul>
          </div>
        
      </div>
    </div>
        )
    } else {
        const keyApi = "bc0a7d7de2ec97549727de4b9f7f2aa4";
    
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${keyApi}&units=metric`;
    axios.get(apiUrl).then(handleResponse)
        return "Loading";
    }
    
 
}
