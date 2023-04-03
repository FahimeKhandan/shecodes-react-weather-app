import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import axios from "axios";
import SearchBox from "./SearchBox";
import TodayBox from "./TodayBox";
import TodayDetails from "./TodayDetails";
import Forcast from "./Forcast";

function App() {
  let [temp, setTemp] = useState(null);
  let [city, setCity] = useState(null);
  let [humidity, setHumidity] = useState(null);
  let [description, setDescription] = useState(null);
  let [wind, setWind] = useState(null);
  let [icon, setIcon] = useState(null);
  let [sunrise, setSunrise] = useState(null);
  let [sunset, setSet] = useState(null);
  let [tempMax, setTempMax] = useState(null);
  let [tempMin, setTempMin] = useState(null);

  const apiKey = "9c74030f9ca50197fb266b914f10d3a4";

  if (!city) {
    setCity("paris");
    updateWeather("paris");
  }

  function parentHandleCityChange(event, newCity) {
    event.preventDefault();

    if (newCity) {
      setCity(newCity);
      updateWeather(newCity);
    } else setCity(null);
  }

  function updateTempr(response) {
    setTemp(response.data.main.temp);
    setHumidity(response.data.main.humidity);
    setWind(response.data.wind.speed);
    setDescription(response.data.weather[0].description);
    setIcon(response.data.weather[0].icon);
    setSunrise(response.data.sys.sunrise);
    setTempMax(response.data.main.temp_max);
    setTempMin(response.data.main.temp_min);
  }

  function updateWeather(cityName) {
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(updateTempr);
  }

  return (
    <div className="App">
      <div className="container">
        <SearchBox
          cityChanged={(event, newCity) =>
            parentHandleCityChange(event, newCity)
          }
        />
        <TodayBox
          current={temp}
          description={description}
          hour="12:00"
          city={city}
          day="sunday"
          icon={icon}
        />
        <TodayDetails
          wind={wind}
          humidity={humidity}
          sunset={sunset}
          sunrise={sunrise}
          tempMax={tempMax}
          tempMin={tempMin}
        />
        <Forcast />
      </div>
    </div>
  );
}

export default App;
