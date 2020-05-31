import React from "react";
import "./navbar.css";

const Navbar = (props) => {
  const buttonPressed = (i) => {
    props.callback(i);
  };

  return (
    <nav>
      <div className="row">
        <div className="col-sm-6" id="navbarName">
          <div className="nav-link">G.R.A.P.H.I.C.S.</div>
        </div>
        <div className="col-sm-6" id="navigation">
          <div className="navigationTitle">Navigation</div>
          <div className="vertical-menu">
            <div className="col">
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => buttonPressed(1)}
                id="navigationButton"
              >
                Green Cube
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => buttonPressed(2)}
                id="navigationButton"
              >
                Teal Cube
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => buttonPressed(3)}
                id="navigationButton"
              >
                Particle Sphere
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
