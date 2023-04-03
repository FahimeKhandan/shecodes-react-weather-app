import { useState } from "react";

export default function SearchBox(props) {
  let [city, setCity] = useState("");
  const handleChange = (event) => {
    // 👇 Get input value from "event"
    setCity(event.target.value);
  };

  return (
    <div>
      <form>
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Enter a city..."
            value={city}
            onChange={handleChange}
          />

          <span className="input-group-btn">
            <button
              className="btn btn-default ml-2"
              onClick={(event) => props.cityChanged(event, city)}
            >
              Search
            </button>
          </span>
        </div>
      </form>
    </div>
  );
}
