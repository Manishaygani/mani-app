import React, { FC, useState, useEffect } from "react";
import styled from "./AboutParagraph.module.css";
interface IAboutParagraph {}

const AboutParagraph: FC<IAboutParagraph> = ({}) => {
  return (
    <div className={styled.aboutparagraph}>
      <p>
        Hello there! My name is mani shaygani.<br></br> I am a web designer &
        developer, and <br></br>I'm very passionate and dedicated to my work.
      </p>
      <p>
        With 1 years experience as a frontend developer<br></br>I have acquired
        the skills and knowledge necessary to<br></br> make your project a
        success.
      </p>
    </div>
  );
};

export default AboutParagraph;
