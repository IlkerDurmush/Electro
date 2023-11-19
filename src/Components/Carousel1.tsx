import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
import img1 from "../Images/img1.jpg";
import img2 from "../Images/img2.jpg";
import img3 from "../Images/img3.jpg";

const Carousel1 = () => {
  return (
    <>
      <Carousel data-bs-theme="dark">
        <Carousel.Item>
          {" "}
          <img
            className="d-block w-100"
            src={img1}
            alt="First slide"
            style={{ height: "70vh", filter: "brightness(0.5)" }}
          />
          <Carousel.Caption>
            <h5
              className="carouselTitle"
              style={{ marginBottom: "10%", color: "white", fontSize: "100px" }}
            >
              ElectroBoom
            </h5>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          {" "}
          <img
            className="d-block w-100"
            src={img2}
            alt="Second slide"
            style={{ height: "70vh", filter: "brightness(0.5)" }}
          />
          <Carousel.Caption>
            <h5
              className="carouselTitle"
              style={{ marginBottom: "10%", color: "white", fontSize: "100px" }}
            >
              Quality Work
            </h5>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img3}
            alt="Third slide"
            style={{ height: "70vh", filter: "brightness(0.5)" }}
          />
          <Carousel.Caption>
            <h5
              className="carouselTitle"
              style={{ marginBottom: "10%", color: "white", fontSize: "100px" }}
            >
              You Ask We Deliver
            </h5>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Carousel1;
