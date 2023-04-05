import ForecastChild from "./ForecastChild";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Forcast(props) {
  const [dailyArr, setDailyAray] = useState(null);
  const [loaded, setLoaded] = useState(false);

  function updateForecast(response) {
    let result = response.data.daily;
    setDailyAray(result);
    setLoaded(true);
  }
useEffect(()=>{
  setLoaded(false)
},[props.lat || props.lon])

  if (loaded && dailyArr) {
    return (
      <div>
        {dailyArr.map((item, index) => {
          if (index < 6) {
            return (
              <ForecastChild
                key={item.dt + index}
                day={item.dt}
                icon={item.weather[0].icon}
                minTemp={item.temp.min}
                maxTemp={item.temp.max}
              />
            );
          }
        })}
      </div>
    );
  } else {
    const newApiKey = "a43564c91a6c605aeb564c9ed02e3858";
    const apiUrlFprcast = `https://api.openweathermap.org/data/3.0/onecall?lat=${props.lat}&lon=${props.lon}&appid=${newApiKey}`;


    axios.get(apiUrlFprcast).then(updateForecast);
    return null;
  }
}
