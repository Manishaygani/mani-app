import styled from "./FooterIntroduction.module.css";
import React, { FC, useState, useEffect } from "react";
interface IFooterIntroduction {}

const FooterIntroduction: FC<IFooterIntroduction> = ({}) => {
  return (
    <div className={styled.FooterIntroduction}>
      <p>Experience</p>
      <h1>My experience</h1>
      <p>
        Hello there! My name is Mani shaygani.<br></br> I am a web developer,
        and I'm very<br></br> passionate and dedicated to my work.
      </p>
    </div>
  );
};

export default FooterIntroduction;
