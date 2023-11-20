import example from "../Images/example.png"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./PagesStyle/Gallery.css"



const Gallery = () => {
  return <>
    <h1>Gallery/Projects</h1>
    <Container>
      <Row className="Row">
        <Col><img src={example} alt="exampleImage" /></Col>
        <Col><img src={example} alt="exampleImage" /></Col>
      </Row>
      <Row className="Row">
        <Col><img src={example} alt="exampleImage" /></Col>
        <Col><img src={example} alt="exampleImage" /></Col>
        <Col><img src={example} alt="exampleImage" /></Col>
      </Row>
      <Row>
        <Col><img src={example} alt="exampleImage" /></Col>
        <Col><img src={example} alt="exampleImage" /></Col>
      </Row>
    </Container>
  </>;
};

export default Gallery;
