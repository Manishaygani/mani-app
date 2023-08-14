import React, { FC, useState, useEffect } from "react";
import styled from "./About.module.css";
import Footer from "../../components/Footer/Footer";
import AboutIntroduction from "../../components/AboutIntroduction/AboutIntroduction";
import AboutMyName from "../../components/AboutMyName/AboutMyName";
import AboutIcons from "../../components/AboutIcons/AboutIcons";
interface IAbout {}

const About: FC<IAbout> = ({}) => {
  return (
    <div className={styled.about}>
      <AboutIntroduction />
      <Footer />
    </div>
  );
};

export default About;
