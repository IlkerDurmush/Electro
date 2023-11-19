import "bootstrap/dist/css/bootstrap.css";
import "./ImageIntro.css";
import img4 from "../Images/img4.jpg";
import img5 from "../Images/img5.jpg";
import img6 from "../Images/img6.jpg";

const ImageIntro = () => {
  return (
    <>
      <div className="ImageIntro">
        <div className="d-flex justify-content-center">
          <strong className="textIntro">Why Choose Us?</strong>
        </div>
        <div className="container text-center" style={{ marginBottom: "50px" }}>
          <div className="row">
            <div className="col">
              <img src={img4} className="imagesOnIntro" />
              <div>
                <strong>
                  {" "}
                  We work with the latest variety of tools and technologies in
                  order to deliver the highest quality
                </strong>
              </div>
            </div>
            <div className="col">
              <img src={img5} className="imagesOnIntro" />

              <div>
                <strong>
                  {" "}
                  We care about your opinion and we work around the time and
                  comfort that you want
                </strong>
              </div>
            </div>
            <div className="col">
              <img src={img6} className="imagesOnIntro" />
              <div>
                <strong>
                  {" "}
                  The highest quality of work done by experienced electricians
                  that care about your safety and quality
                </strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageIntro;
