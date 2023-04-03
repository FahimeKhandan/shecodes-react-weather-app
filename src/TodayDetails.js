export default function TodayDetails(props) {
  function timestampToHours(unixTimestamp) {
    const date = new Date(unixTimestamp * 1000);
    const hours = date.getHours();
    const minutes = "0" + date.getMinutes();
    const formatTime =
      hours + ":" + minutes.substr(-2);

      return formatTime
  }

  return (
    <section className="today-details">
      <div className="row">
        <div className="col">
          <div className="row">
            <div className="col">{Math.round(props.tempMax)}°</div>
          </div>
          <div className="row">
            <div className="col sub-text">high</div>
          </div>
        </div>
        <div className="col">
          <div className="row">
            <div className="col">{Math.round(props.wind)}mph</div>
          </div>
          <div className="row">
            <div className="col sub-text">wind</div>
          </div>
        </div>
        <div className="col">
          <div className="row">
            <div className="col">{timestampToHours(props.sunrise)}</div>
          </div>
          <div className="row">
            <div className="col sub-text">sunrise</div>
          </div>
        </div>
      </div>
      <div className="w-100"></div>
      <div className="row">
        <div className="col">
          <div className="row">
            <div className="col">{Math.round(props.tempMin)}°</div>
          </div>
          <div className="row">
            <div className="col sub-text">low</div>
          </div>
        </div>
        <div className="col">
          <div className="row">
            <div className="col">{props.humidity}%</div>
          </div>
          <div className="row">
            <div className="col sub-text">humidity</div>
          </div>
        </div>
        <div className="col">
          <div className="row">
            <div className="col">{timestampToHours(props.sunset)}</div>
          </div>
          <div className="row">
            <div className="col sub-text">sunset</div>
          </div>
        </div>
      </div>
    </section>
  );
}
