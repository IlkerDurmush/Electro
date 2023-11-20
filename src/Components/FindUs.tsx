import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./ComponentStyles/FindUs.css";

const FindUs = () => {
  return (
    <>
      <div
        className="d-flex justify-content-center"
        style={{ marginBottom: "100px" }}
      >
        <strong className="findText">Where To Find Us</strong>
      </div>
      <Container>
        <Row style={{ marginBottom: "50px" }}>
          <Col>
            <strong style={{ fontSize: "150%" }}>
              Adress: Asenovgrad ul.Polkovnik Drangov 6
            </strong>
          </Col>
        </Row>
        <Row style={{ marginBottom: "50px" }}>
          <Col>
            {" "}
            <strong style={{ fontSize: "150%" }}>
              Work Time: Mon-Fri 9:00 - 17:00
            </strong>
          </Col>

          <Col>
            <strong style={{ fontSize: "150%" }}>
              Email: ElectroBoom@gmail.com{" "}
            </strong>
          </Col>

          <Col>
            <strong style={{ fontSize: "150%" }}>
              Telephone: 089 666 2642{" "}
            </strong>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default FindUs;
