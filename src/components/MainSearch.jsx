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
        baseEndpoint + query + ",&APPID=4f6026bc1315d42e2c0879ac5fb74945" //query = our search
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
            <div id={isActive ? "info" : ""}>
              <h2>{cities.name}</h2>
              <h2>{cities?.main?.temp}</h2>
              {/* <h2>{cities.main.weather}</h2>  this line breaks entire app   what am I doing wrong? */}
              {/* <h2>{cities.sys.country}</h2> -> renders once, breaks on the reload */}
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
