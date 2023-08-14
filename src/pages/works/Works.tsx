import React, { FC, useState, useEffect } from "react";
import styled from "./Works.module.css";
import Navbar from "../../components/Navbar/Navbar";
import WorksFooter from "../../components/worksFooter/WorksFooter";
import WorksIntroduction from "../../components/worksIntroduction/WorksIntroduction";
import WorksArticle from "../../components/worksArticle/WorksArticle";
interface IWorks {}

const Works: FC<IWorks> = ({}) => {
  return (
    <div className={styled.works}>
      <WorksIntroduction />
      <div>
        <WorksArticle />
      </div>
    </div>
  );
};

export default Works;
