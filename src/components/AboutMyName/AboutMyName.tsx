import React, { FC, useState, useEffect } from "react";
import styled from "./AboutMyName.module.css";
interface IAboutMyName {}

const AboutMyName: FC<IAboutMyName> = ({}) => {
  return (
    <div className={styled.AboutMyName}>
      <p>Product Designer based in London</p>
      <h1>MANI SHAYGANI</h1>
    </div>
  );
};
export default AboutMyName;
