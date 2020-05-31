import React from "react";
import GreenCube from "../demos/GreenCube";
import TealSphere from "../demos/TealSphere";
import ParticleSphere from "../demos/ParticleSphere";

const PageController = (props) => {
  if (props.demo === 1) {
    return <div className="pageController">{<GreenCube />}</div>;
  } else if (props.demo === 2) {
    return <div className="pageController">{<TealSphere />}</div>;
  } else if (props.demo === 3) {
    return <div className="pageController">{<ParticleSphere />}</div>;
  } else {
    return <div className="pageController">{<GreenCube />}</div>;
  }
};

export default PageController;
