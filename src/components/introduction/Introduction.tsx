import React, { FC, useState, useEffect } from "react";
import styled from "./Introduction.module.css";
interface IIntroduction {}

const Introduction: FC<IIntroduction> = ({}) => {
  return (
    <div className={styled.text}>
      <h1>
        my name<br></br> is mani<br></br> shaygani...
      </h1>
      <p>Product Designer based in tehran</p>
    </div>
  );
};

export default Introduction;
