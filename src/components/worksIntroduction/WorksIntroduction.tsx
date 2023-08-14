import React, { FC, useState, useEffect } from "react";
import styled from "./WorksIntroduction.module.css";
interface IWorksIntroduction {}

const WorksIntroduction: FC<IWorksIntroduction> = ({}) => {
  return (
    <div className={styled.worksIntroduction}>
      <p>work</p>
      <h1>RECENT PROJECT</h1>
    </div>
  );
};

export default WorksIntroduction;
