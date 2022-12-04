import "./App.css";
import { Container, Row, Col, Card, Badge } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import MainSearch from "./components/MainSearch";

function App() {
  return (
    <>
      <Container fluid id="fullsize">
        <Container className=" shadow-lg p-3 mb-5 bg-body rounded" id="main">
          <div className="text-center mt-2">
            <Container>
              <Row>
                <Col xs={4}>
                  <div className="d-flex justify-content-start">
                    <h5>Warsaw</h5>
                    <div className="ms-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        fill="currentColor"
                        className="bi bi-geo-alt-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                      </svg>
                    </div>
                  </div>
                </Col>
                <Col xs={4}>
                  <h2 id="heading">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      fill="currentColor"
                      className="bi bi-cloud-snow m-1"
                      viewBox="0 0 16 16"
                    >
                      <path d="M13.405 4.277a5.001 5.001 0 0 0-9.499-1.004A3.5 3.5 0 1 0 3.5 10.25H13a3 3 0 0 0 .405-5.973zM8.5 1.25a4 4 0 0 1 3.976 3.555.5.5 0 0 0 .5.445H13a2 2 0 0 1-.001 4H3.5a2.5 2.5 0 1 1 .605-4.926.5.5 0 0 0 .596-.329A4.002 4.002 0 0 1 8.5 1.25zM2.625 11.5a.25.25 0 0 1 .25.25v.57l.501-.287a.25.25 0 0 1 .248.434l-.495.283.495.283a.25.25 0 0 1-.248.434l-.501-.286v.569a.25.25 0 1 1-.5 0v-.57l-.501.287a.25.25 0 0 1-.248-.434l.495-.283-.495-.283a.25.25 0 0 1 .248-.434l.501.286v-.569a.25.25 0 0 1 .25-.25zm2.75 2a.25.25 0 0 1 .25.25v.57l.501-.287a.25.25 0 0 1 .248.434l-.495.283.495.283a.25.25 0 0 1-.248.434l-.501-.286v.569a.25.25 0 1 1-.5 0v-.57l-.501.287a.25.25 0 0 1-.248-.434l.495-.283-.495-.283a.25.25 0 0 1 .248-.434l.501.286v-.569a.25.25 0 0 1 .25-.25zm5.5 0a.25.25 0 0 1 .25.25v.57l.501-.287a.25.25 0 0 1 .248.434l-.495.283.495.283a.25.25 0 0 1-.248.434l-.501-.286v.569a.25.25 0 1 1-.5 0v-.57l-.501.287a.25.25 0 0 1-.248-.434l.495-.283-.495-.283a.25.25 0 0 1 .248-.434l.501.286v-.569a.25.25 0 0 1 .25-.25zm-2.75-2a.25.25 0 0 1 .25.25v.57l.501-.287a.25.25 0 0 1 .248.434l-.495.283.495.283a.25.25 0 0 1-.248.434l-.501-.286v.569a.25.25 0 1 1-.5 0v-.57l-.501.287a.25.25 0 0 1-.248-.434l.495-.283-.495-.283a.25.25 0 0 1 .248-.434l.501.286v-.569a.25.25 0 0 1 .25-.25zm5.5 0a.25.25 0 0 1 .25.25v.57l.501-.287a.25.25 0 0 1 .248.434l-.495.283.495.283a.25.25 0 0 1-.248.434l-.501-.286v.569a.25.25 0 1 1-.5 0v-.57l-.501.287a.25.25 0 0 1-.248-.434l.495-.283-.495-.283a.25.25 0 0 1 .248-.434l.501.286v-.569a.25.25 0 0 1 .25-.25z" />
                    </svg>
                    Weather.io
                  </h2>
                </Col>
                <Col
                  className="d-flex justify-content-end align-items-center"
                  xs={4}
                >
                  <div className="me-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      fill="currentColor"
                      className="bi bi-bell-slash"
                      viewBox="0 0 16 16"
                    >
                      <path d="M5.164 14H15c-.299-.199-.557-.553-.78-1-.9-1.8-1.22-5.12-1.22-6 0-.264-.02-.523-.06-.776l-.938.938c.02.708.157 2.154.457 3.58.161.767.377 1.566.663 2.258H6.164l-1 1zm5.581-9.91a3.986 3.986 0 0 0-1.948-1.01L8 2.917l-.797.161A4.002 4.002 0 0 0 4 7c0 .628-.134 2.197-.459 3.742-.05.238-.105.479-.166.718l-1.653 1.653c.02-.037.04-.074.059-.113C2.679 11.2 3 7.88 3 7c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0c.942.19 1.788.645 2.457 1.284l-.707.707zM10 15a2 2 0 1 1-4 0h4zm-9.375.625a.53.53 0 0 0 .75.75l14.75-14.75a.53.53 0 0 0-.75-.75L.625 15.625z" />
                    </svg>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    fill="currentColor"
                    className="bi bi-person-circle"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                    <path
                      fillRule="evenodd"
                      d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                    />
                  </svg>
                </Col>
              </Row>
            </Container>
          </div>
          <div>
            <MainSearch />
          </div>
          <Container>
            <div>
              <div>
                <h4>Top Stories & Latest News:</h4>
                <Row>
                  <Col xs={3}>
                    <Card id="card">
                      <Card.Img
                        variant="top"
                        src="https://res.cloudinary.com/dk-find-out/image/upload/q_80,w_1920,f_auto/A-Alamy-FATHXF_k1zigj.jpg"
                        id="card-img"
                      />

                      <Card.Body>
                        <Card.Text className="text-truncate">
                          Weather Today Across the Country
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col xs={3}>
                    <Card id="card">
                      <Card.Img
                        variant="top"
                        src="https://www.gannett-cdn.com/presto/2020/12/17/NBCT/1a56710f-ffe4-40a1-b4a4-acfc085406a0-PABEA-121820-Snow_Day-32.jpg"
                        id="card-img"
                      />
                      <Card.Body>
                        <Card.Text className="text-truncate">
                          Nine Cool, and Useful, Snow Facts See More
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col xs={3}>
                    <Card id="card">
                      <Card.Img
                        variant="top"
                        src="https://media-cldnry.s-nbcnews.com/image/upload/t_fit-760w,f_auto,q_auto:best/rockcms/2021-12/211211-tornado-slides-ew-111p-cefad2.gif"
                        id="card-img"
                      />
                      <Card.Body>
                        <Card.Text className="text-truncate">
                          What To Do After A Tornado
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col xs={3}>
                    <Card id="card">
                      <Card.Img
                        variant="top"
                        src="https://s.abcnews.com/images/US/tornado-destruction-kentucky-usa-jt-211212_1639318456696_hpMain_16x9_1600.jpg"
                        id="card-img"
                      />
                      <Card.Body>
                        <Card.Text className="text-truncate">
                          Photos From Tuesday Night's Deadly Southern Severe
                          Weather
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </div>
            </div>
            <div className="mt-2 ">
              <Card id="card">
                <Card.Header className="bg-warning text-center">
                  <span>Stay Safe</span>
                </Card.Header>
                <Card.Body>
                  <Card.Title>Spewing Ash, Debris</Card.Title>
                  <Card.Text className="text-truncate">
                    Hawaii’s Mauna Loa, the world’s largest active volcano, has
                    started to erupt for the first time in nearly four decades,
                    prompting volcanic ash and debris to fall nearby,
                    authorities said Monday.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </Container>
        </Container>
      </Container>
    </>
  );
}

export default App;
