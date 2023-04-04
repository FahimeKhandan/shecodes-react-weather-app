import { useState } from "react";

export default function TempUnit(props) {
  const [unit, setUnit] = useState("celsius");

  function convertUnit(event, unit) {
    event.preventDefault();
    setUnit(unit)
  }

  function fahrenheit(){
    return(props.current * 9) / 5 + 32
  }

  if (unit === "celsius") {
    return (
      <h3>
        <span id="current-temperature">{Math.round(props.current)}</span>
        <sup>
          <p class="d-inline">°C</p>|
          <a href="/" onClick={(event)=>convertUnit(event, 'fahrenheit')} class="d-inline">
            °F
          </a>
        </sup>
      </h3>
    );
  }
  else{
    return (
        <h3>
          <span id="current-temperature">{Math.round(fahrenheit())}</span>
          <sup>
            <a href="/" onClick={(event)=>convertUnit(event, 'celsius')} class="d-inline">
              °C
            </a>|
            <p class="d-inline">°F</p>
          </sup>
        </h3>
      );
  }
}
