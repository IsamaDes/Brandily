import React from "react";
import "./About.css";

import yellowbox from "../../assets/yellowimage.svg";
import column from "../../assets/column.svg";
import VerticalSlider from "../VerticalSlider";

const About = () => {
  const style = `
@media screen and (max-width: 600px){

    .aboutbody{
        margin-top: 120px;
    }

    .aboutin{
        background-image: url("../assets/backgroundImg.svg");
        width:90%;
        align-self: center;
        display: flex;
        flex-direction: column;
        gap: 50px;
        background-color: #FEF6E4;
  
        margin-top: 0px;
    }
`;

  return (
    <div className="aboutbody">
      <div className="aboutin">
        <div className="styleabout">About Styleplus</div>
        <div className="aboutimageslider">
          <div className="aboutinnerimageslider">
            <VerticalSlider />
          </div>
          <div className="aboutyellowbox">
            <img className="aboutyellowboximg" src={yellowbox} />
          </div>
        </div>
        <div className="aboutsparkdesription">
          <div className="aboutsparkspark">
            <div className="sparksparkcolumn">
              <img className="sparkcolumnimg" src={column} />
            </div>
            <div className="sparkspark">Spark innovation, fuel growth</div>
          </div>

          <div className="aboutsparkatstyleplus">
            At Styleplus, we're passionate about harnessing the power of
            technology to drive innovation and growth. As a leading tech service
            company, we specialize in providing cutting-edge solutions that help
            businesses thrive in an ever-evolving digital landscape. With a keen
            eye for emerging trends and a deep understanding of our clients'
            needs, we craft tailored solutions that empower companies to stay
            ahead of the curve, drive efficiency, and achieve their goals.
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
