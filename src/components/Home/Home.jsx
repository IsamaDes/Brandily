import "./Home.css";
import { Link } from "react-router-dom";
import crackedimg from "/Users/mac/Downloads/Brandily/Brandily/src/assets/CrackedImg.svg";
import arrow from "/Users/mac/Downloads/Brandily/Brandily/src/assets/leftfacearrow.svg";
import column from "/Users/mac/Downloads/Brandily/Brandily/src/assets/column.svg";
import nimg from "/Users/mac/Downloads/Brandily/Brandily/src/assets/nimage.svg";
import circleangle from "/Users/mac/Downloads/Brandily/Brandily/src/assets/circleangle.svg";
import rectangleimg from "/Users/mac/Downloads/Brandily/Brandily/src/assets/rectanglebox.svg";
import phoneimg from "/Users/mac/Downloads/Brandily/Brandily/src/assets/phoneimg.svg";
import yellowbox from "/Users/mac/Downloads/Brandily/Brandily/src/assets/yellowimage.svg";
import bigarrow from "/Users/mac/Downloads/Brandily/Brandily/src/assets/bigarrow.svg";
import circlearrow from "/Users/mac/Downloads/Brandily/Brandily/src/assets/circlearrow.svg";
import buttonarrow from "/Users/mac/Downloads/Brandily/Brandily/src/assets/buttonarrow.svg";

import React from "react";
import VerticalSlider from "../VerticalSlider";

const Home = () => {
  return (
    <div className="homebody">
      <div className="partnersupportcrackzigzag">
        <div className="partner">
          Partner for every <span className="market">marketing</span> activities
        </div>

        <div className="cracked">
          <img className="crackedimg" src={crackedimg} />
        </div>
        <div className="supportandarrow">
          <div className="arrow">
            <img className="bigarrow" src={bigarrow} />
          </div>
          <div className="arrow2">
            <img className="smallarrow" src={arrow} />
          </div>
          <div className="supportspan">
            <span className="support">
              We can support you with content marketing, employer branding, web
              development, performance marketing or social media marketing
            </span>
          </div>
        </div>

        <div className="zigzag"></div>
      </div>

      <div className="bottom">
        <div className="aboutus">
          <div className="imageslider">
            <div className="innerimageslider">
              <VerticalSlider className="verticalimg" />
            </div>
            <div className="yellowbox">
              <img className="yellowboximg" src={yellowbox} />
            </div>
          </div>
          <div className="desription">
            <div className="aboutspark">
              <div className="about">ABOUT US</div>
              <div className="sparkinnovation">
                <div className="columnspark">
                  <div className="sparkcolumn">
                    <img className="sparkcolumnimg" src={column} />
                  </div>
                  <div className="spark">Spark innovation, fuel growth</div>
                </div>

                <div className="atstyleplus">
                  At Styleplus, we're passionate about harnessing the power of
                  technology to drive innovation and growth. As a leading tech
                  service company, we specialize in providing cutting-edge
                  solutions that help businesses thrive in an ever-evolving
                  digital landscape. With a keen eye for emerging trends and a
                  deep understanding of our clients' needs, we craft tailored
                  solutions that empower companies to stay ahead of the curve,
                  drive efficiency, and achieve their goals.
                </div>
              </div>
            </div>
            <Link to="/about">
              <div className="sparkbuttondiv">
                <button className="sparkbutton"> Read more</button>
                <button className="longerbutton">
                  <img className="buttonarrow" src={buttonarrow} />
                </button>
              </div>
            </Link>
          </div>
        </div>

        <div className="theservices">
          <div className="ourservicestechsuccess">
            <div className="ourservices"> OUR SERVICES</div>
            <div className="techtransform">
              <div className="techsuccess">Where Tech Meets Success</div>
              <div className="transform">
                Transform your business with our expert tech solutions! From
                strategic planning to seamless implementation, we'll help you
                harness the power of technology to drive growth, boost
                efficiency, and stay ahead of the competition
              </div>
            </div>
          </div>
          <div className="cards">
            <div className="yellowcard">
              <div className="innercard">
                <div className="leftwing">
                  <div className="leftwingimg">
                    <img className="ngraphic" src={nimg} />
                  </div>

                  <div className="brandname">
                    <div className="corporate">Corporate Branding</div>

                    <div className="cercarrow">
                      <img className="circlearrow" src={circlearrow} />
                    </div>
                  </div>
                </div>

                <div className="frenchlang">
                  Quis at diam diam quis in. Condimentum lobortis lacus a ornare
                  leo ac bibendum lectus. Aliquam elementum mauris{" "}
                </div>
              </div>
            </div>
            <div className="bluecard">
              <div className="innercard">
                <div className="leftwing">
                  <div className="leftwingimg">
                    <img className="ngraphic" src={circleangle} />
                  </div>
                  <div className="brandname">
                    <div className="graphic">Graphic Design</div>

                    <div className="cercarrow">
                      <img className="circlearrow" src={circlearrow} />
                    </div>
                  </div>
                </div>
                <div className="frenchlang">
                  Quis at diam diam quis in. Condimentum lobortis lacus a ornare
                  leo ac bibendum lectus. Aliquam elementum mauris{" "}
                </div>
              </div>
            </div>
            <div className="skybluecard">
              <div className="innercard">
                <div className="leftwing">
                  <div className="leftwingimg">
                    <img className="ngraphic" src={rectangleimg} />
                  </div>

                  <div className="brandname">
                    <div>Web Design & Development</div>

                    <div className="cercarrow">
                      <img className="circlearrow" src={circlearrow} />
                    </div>
                  </div>
                </div>

                <div className="frenchlang">
                  Quis at diam diam quis in. Condimentum lobortis lacus a ornare
                  leo ac bibendum lectus. Aliquam elementum mauris{" "}
                </div>
              </div>
            </div>
            <div className="purplecard">
              <div className="innercard">
                <div className="leftwing">
                  <div className="leftwingimg">
                    <img className="ngraphic" src={phoneimg} />
                  </div>
                  <div className="brandname">
                    <div>Mobile Design & Development</div>

                    <div className="cercarrow">
                      <img className="circlearrow" src={circlearrow} />
                    </div>
                  </div>
                </div>

                <div className="frenchlang">
                  Quis at diam diam quis in. Condimentum lobortis lacus a ornare
                  leo ac bibendum lectus. Aliquam elementum mauris{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
