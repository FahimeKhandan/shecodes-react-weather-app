export default function ForecastChild(props) {
  function getDay() {
    let date = new Date(props.day * 1000);
    let day = date.getDay();

    let days = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
    return days[day];
  }

  return (
    <div className="days-info">
      <div className="days-box">
        <div className="desc-2">{getDay()}</div>
        <div className="icon">
          <img
            src={`https://openweathermap.org/img/wn/${props.icon}.png`}
            width="50"
            alt="Weather Save Png"
          />
        </div>
        <div className="desc-2">
          {Math.round(props.minTemp)}°/{Math.round(props.maxTemp)}°
        </div>
      </div>
    </div>
  );
}
