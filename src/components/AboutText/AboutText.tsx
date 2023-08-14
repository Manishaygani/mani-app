import React, { FC, useState, useEffect } from "react";
import styled from "./AboutText.module.css";
interface IAboutText {}

const AboutText: FC<IAboutText> = ({}) => {
  return (
    <div className={styled.AboutText}>
      <h1>1+</h1>
      <h1>14</h1>
    </div>
  );
};

export default AboutText;
