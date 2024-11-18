export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city"
              className="form-control"
              autoFocus="on"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary w-100"
            />
          </div>
        </div>
      </form>
      <h1>Limpopo</h1>
      <ul>
        <li>Monday 20:15</li>
        <li>Clear Sky</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="clearfix">
            <img
              src="https://ss1.gstatic.com/onebox/weather/64/partly_cloudy.png"
              alt="cloudy picture"
              className="floate-left"
            />
            <span className="temperature">21</span>
            <span className="unit">"°C</span>
          </div>
          <div className="col-6">
            <ul>
              <li>Temperature : 21°C</li>
              <li>Humidity : 56%</li>
              <li>Wind : 3.06km/h</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
