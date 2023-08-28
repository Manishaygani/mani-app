import React, { FC, useState, useEffect } from "react";
import styled from "./WorksArticle.module.css";
import WorksArticleImg from "../worksArticleImg/WorksArticleImg";
import WorksArticleParagraph from "../worksArticleParagraph/WorksArticleParagraph";
interface IWorksArticle {
  title: string;
}

const WorksArticle: FC<IWorksArticle> = ({ title }) => {
  return (
    <div className={styled.WorksArticle}>
      <WorksArticleImg />
      <WorksArticleParagraph />
      <p>{title}</p>
    </div>
  );
};

export default WorksArticle;
