export default function TodayBox(props) {
  // const days = [
  //   "Sunday",
  //   "Monday",
  //   "Tuesday",
  //   "Wednesday",
  //   "Thursday",
  //   "Friday",
  //   "Saturday",
  // ];

  const now = new Date();

  // const getToday = days[now.getDay()];
  const hour = now.getHours();
  const minutes = now.getMinutes();

  return (
    <section>
      <div className="today-main-box">
        <div className="icon">
          <img
            src={`https://openweathermap.org/img/wn/${props.icon}@2x.png`}
            width="120"
            alt="Weather Icon"
          />
        </div>
        <div className="desc-2" id="current-city">
          {props.city}
        </div>
        <h3>
          <span id="current-temperature">{Math.round(props.current)}</span>
          <sup>
            <a href="#" id="celicious">
              °C
            </a>
            |
            <a href="#" id="fahrenheit">
              °F
            </a>
          </sup>
        </h3>
        <div className="desc-2">
          <span id="today">{props.day} </span>
          <span id="time">
            {hour}:{minutes}
          </span>
        </div>
        <div className="desc-2" id="temp-description">
          {props.description}
        </div>
      </div>
    </section>
  );
}
