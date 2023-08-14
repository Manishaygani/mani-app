import React, { FC, useState, useEffect } from "react";
import styled from "./AboutIntroduction.module.css";
import AboutIcons from "../AboutIcons/AboutIcons";
import Line from "../line/Line";
import AboutMyName from "../AboutMyName/AboutMyName";
import AboutText from "../AboutText/AboutText";
import AboutParagraph from "../aboutParagraph/AboutParagraph";
interface IAboutIntroduction {}

const AboutIntroduction: FC<IAboutIntroduction> = ({}) => {
  return (
    <div className={styled.AboutIntroduction}>
      <div>
        <p>Nice to meet you!</p>
      </div>
      <div>
        <h1>WELCOME TO...</h1>
        {/* <AboutMyName /> */}
        <AboutIcons />
        <Line />
        <AboutText />
        <AboutParagraph />
      </div>
    </div>
  );
};

export default AboutIntroduction;
