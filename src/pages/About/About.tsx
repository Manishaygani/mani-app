import React, { FC, useState, useEffect } from "react";
import styled from "./About.module.css";
import Footer from "../../components/Footer/Footer";
import AboutIntroduction from "../../components/AboutIntroduction/AboutIntroduction";
interface IAbout {}

const About: FC<IAbout> = ({}) => {
  return (
    <div className={styled.about}>
      <Footer />
      <AboutIntroduction />
    </div>
  );
};

export default About;
