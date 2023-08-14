import React, { FC, useState, useEffect } from "react";
import styled from "./WorksArticleParagraph.module.css";
import WorksIcon from "../WorksIcon/WorksIcon";
interface IWorksArticleParagraph {}

const WorksArticleParagraph: FC<IWorksArticleParagraph> = ({}) => {
  return (
    <div className={styled.WorksArticleParagraph}>
      <p>ux case study</p>
      <h1>Bally Website Research</h1>
      <WorksIcon />
    </div>
  );
};

export default WorksArticleParagraph;
