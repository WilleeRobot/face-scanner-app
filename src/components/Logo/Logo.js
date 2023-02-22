import React from "react";
import Tilt from "react-parallax-tilt";
import faceHunt from "./faceHuntLogo.png";

const Logo = () => {
  return (
    <Tilt className="dib">
      <img className="shadow-4 br4 mb4" src={faceHunt} alt="logo" />
    </Tilt>
  );
};

export default Logo;
