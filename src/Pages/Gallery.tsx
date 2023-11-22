import gallery1 from '../Images/gallery1.jpg'
import gallery2 from '../Images/gallery2.jpg'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./PagesStyle/Gallery.css"



const Gallery = () => {
  return <>
    <h1>Gallery/Projects</h1>
    <Container className='Container'>
      <Row className="Row">
        <Col><img src={gallery1} alt="exampleImage" /></Col>
        <Col><img src={gallery2} alt="exampleImage" /></Col>
      </Row>
      <Row className="Row">
        <Col><img src={gallery1} alt="exampleImage" /></Col>
        <Col><img src={gallery1} alt="exampleImage" /></Col>
        <Col><img src={gallery2} alt="exampleImage" /></Col>
      </Row>
      <Row>
        <Col><img src={gallery2} alt="exampleImage" /></Col>
        <Col><img src={gallery1} alt="exampleImage" /></Col>
      </Row>
    </Container>
  </>;
};

export default Gallery;
