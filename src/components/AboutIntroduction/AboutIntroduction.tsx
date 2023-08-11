import React, { FC, useState, useEffect } from "react";
import walpaper from "../myPhoto/walpaper.png.jpg";
import styled from "./AboutIntroduction.module.css";
interface IAboutIntroduction {}

const AboutIntroduction: FC<IAboutIntroduction> = ({}) => {
  return (
    <div className={styled.AboutIntroduction}>
      <p>Nice to meet you!</p>
      <h1>WELCOME TO...</h1>
    </div>
  );
};

export default AboutIntroduction;
