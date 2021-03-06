import React from "react";
import Flag from "../image/flag.svg";
import Zoom from "react-reveal/Zoom";

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <div style={{ textAlign: "center" }}>
          <a href="https://www.github.com/lishugupta652">
            <i class="fa fa-github" aria-hidden="true"></i>
          </a>
        </div>
        {/* <h1>
          <i class="fa fa-quote-left" aria-hidden="true"></i> Don't Judge Me I
          Am Still Learning.
        </h1> */}
        <h1 className="orange">VANDE MATRAM</h1>
        <h1 className="white">JAI HIND</h1>
        <h1 className="green">JAI BHARAT</h1>
      </div>

      <div className="resume">
        <a href="https://docs.google.com/document/d/e/2PACX-1vQAYtwHunE6q5hijPSPIjnDbJW6LViny7gwaY08_mH0FNFQgbhYOtP74du28FIRTwMaLXvJ6w8Ghqlb/pub">
          Resume
        </a>
      </div>
      <div class="flag-container">
        <Zoom right>
          <img alt="flag" src={Flag} />
        </Zoom>
      </div>
    </div>
  );
};

export default Footer;
