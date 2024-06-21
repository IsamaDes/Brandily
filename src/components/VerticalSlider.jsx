import React from "react";
import "./VerticalSlider.css";
import styled, { keyframes } from "styled-components";
import sliderpic1 from "/Users/mac/Downloads/Brandily/Brandily/src/assets/sliderpic1.svg";
import sliderpic2 from "/Users/mac/Downloads/Brandily/Brandily/src/assets/sliderpic2.svg";
import sliderpic3 from "/Users/mac/Downloads/Brandily/Brandily/src/assets/sliderpic3.svg";
import sliderpic4 from "/Users/mac/Downloads/Brandily/Brandily/src/assets/sliderpic4.svg";
import sliderpic5 from "/Users/mac/Downloads/Brandily/Brandily/src/assets/sliderpic5.svg";
import yellowbox from "/Users/mac/Downloads/Brandily/Brandily/src/assets/yellowimage.svg";

const slide = keyframes`
  0% { transform: translateY(0); }
  100% { transform: translateY(-100%); }
`;

const SliderContainer = styled.div`
  width: 100%;
  height: 350px; /* Adjust the height as needed */
  overflow: hidden;
  margin-top: 15px;
  display: flex;
`;

const SliderContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 200%; /* Twice the height to allow for a seamless loop */
  animation: ${slide} 10s linear infinite;
`;

const Slide = styled.div`
  width: 100%;
  height: 50%; /* Adjust based on the number of slides */
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    max-width: 100%;
    max-height: 100%;
  }
`;

const VerticalSlider = () => {
  return (
    <SliderContainer className="slidercontainer">
      <SliderContent>
        <Slide>
          <img className="slideimage" src={sliderpic1} />
        </Slide>

        <Slide>
          <img className="slideimage" src={sliderpic2} />
        </Slide>
        <Slide>
          <img className="slideimage" src={sliderpic3} />
        </Slide>
        <Slide>
          <img sclassName="slideimage" rc={sliderpic3} />
        </Slide>
        <Slide>
          <img className="slideimage" src={sliderpic4} />
        </Slide>
        <Slide>
          <img className="slideimage" src={sliderpic5} />
        </Slide>
      </SliderContent>
    </SliderContainer>
  );
};

export default VerticalSlider;
