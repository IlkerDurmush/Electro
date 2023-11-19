import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg "
        style={{
          background:
            "linear-gradient(0deg,rgba(255, 255, 255, 1) 0%,rgba(230, 230, 230, 1) 100%)",
        }}
      >
        <div className="container-fluid ">
          <Link className="navbar-brand " to="/">
            <strong className="text-dark p-3" style={{ fontSize: "40px" }}>
              {" "}
              ElectroBoom
            </strong>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  className="nav-link active text-dark p-3"
                  aria-current="page"
                  to="/"
                >
                  <strong style={{ fontSize: "20px" }}> Home</strong>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark p-3" to="/gallery">
                  <strong style={{ fontSize: "20px" }}>Gallery</strong>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark p-3" to="/pricing">
                  <strong style={{ fontSize: "20px" }}>Pricing</strong>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
