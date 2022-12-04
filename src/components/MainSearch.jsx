import { useState } from "react";
import { Container, Row, Col, Form, Card } from "react-bootstrap";
export default function MainSearch() {
  const [query, setQuery] = useState(""); // base state, new state to change on (string) ✔️
  const [cities, setCities] = useState([]); // base state, new state to change on (array = Data (Fetch)) ✔️
  const [isActive, setIsActive] = useState(false);
  const baseEndpoint = "https://api.openweathermap.org/data/2.5/weather?q="; //base endpoint ✔️
  const handleChange = (e) => {
    setQuery(e.target.value); //state = setQuery = input value✔️
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); //so it dont refresh on submit ✔️
    try {
      const response = await fetch(
        baseEndpoint +
          query +
          ",&APPID=4f6026bc1315d42e2c0879ac5fb74945" +
          "&units=metric" //query = our search
      );
      if (response.ok) {
        const data = await response.json(); //unboxing ✔️
        console.log(data); //                                                                        logs our fetched Data.
        setCities(data);

        setIsActive((current) => !current);
        //cities = setCities ✔️
      } else {
        //error catch ✔️
        alert("Error fetching results");
      }
    } catch (error) {
      //error catch ✔️
      console.log(error);
    }
  };

  return (
    <Container>
      <Row className="mt-2">
        <Col xs={10} className="mx-auto">
          <Form onSubmit={handleSubmit}>
            <Form.Control
              type="search"
              value={query}
              onChange={handleChange}
              placeholder="Search City or Zip Code"
            />
          </Form>
        </Col>
        <Col xs={10} className="mx-auto mb-5">
          <div className="d-flex justify-content-center">
            <div className={isActive ? "visible" : "invisible"}>
              <Container className="d-flex justify-content-between">
                <div>
                  <h1>
                    {cities.name} ({cities?.sys?.country})
                  </h1>
                  <div className="d-flex align-items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      fill="currentColor"
                      class="bi bi-thermometer"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 14a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                      <path d="M8 0a2.5 2.5 0 0 0-2.5 2.5v7.55a3.5 3.5 0 1 0 5 0V2.5A2.5 2.5 0 0 0 8 0zM6.5 2.5a1.5 1.5 0 1 1 3 0v7.987l.167.15a2.5 2.5 0 1 1-3.333 0l.166-.15V2.5z" />
                    </svg>
                    <h1>{cities?.main?.temp}°</h1>
                  </div>
                  <h5 className="text-muted">
                    Feels like: {cities?.main?.feels_like}°
                  </h5>
                  <h4 className="text-capitalize">
                    {/* Weather: {cities?.weather[0].description}° */}
                  </h4>
                  <div className="d-flex align-items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      fill="currentColor"
                      class="bi bi-sun"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" />
                    </svg>
                    <h3 className="mx-2">{cities?.main?.temp_min}°</h3>
                  </div>
                  <div className="d-flex align-items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-moon"
                      viewBox="0 0 16 16"
                    >
                      <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278zM4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286z" />
                    </svg>
                    <h3 className="mx-2">{cities?.main?.temp_max}°</h3>
                  </div>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="60"
                    height="60"
                    fill="currentColor"
                    className="bi bi-cloud-rain-heavy m-4"
                    viewBox="0 0 16 16"
                  >
                    <path d="M4.176 11.032a.5.5 0 0 1 .292.643l-1.5 4a.5.5 0 1 1-.936-.35l1.5-4a.5.5 0 0 1 .644-.293zm3 0a.5.5 0 0 1 .292.643l-1.5 4a.5.5 0 1 1-.936-.35l1.5-4a.5.5 0 0 1 .644-.293zm3 0a.5.5 0 0 1 .292.643l-1.5 4a.5.5 0 1 1-.936-.35l1.5-4a.5.5 0 0 1 .644-.293zm3 0a.5.5 0 0 1 .292.643l-1.5 4a.5.5 0 0 1-.936-.35l1.5-4a.5.5 0 0 1 .644-.293zm.229-7.005a5.001 5.001 0 0 0-9.499-1.004A3.5 3.5 0 1 0 3.5 10H13a3 3 0 0 0 .405-5.973zM8.5 1a4 4 0 0 1 3.976 3.555.5.5 0 0 0 .5.445H13a2 2 0 0 1 0 4H3.5a2.5 2.5 0 1 1 .605-4.926.5.5 0 0 0 .596-.329A4.002 4.002 0 0 1 8.5 1z" />
                  </svg>
                </div>
              </Container>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
