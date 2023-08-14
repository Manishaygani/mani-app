import React, { FC, useState, useEffect } from "react";
import styled from "./WorksArticle.module.css";
import WorksArticleImg from "../worksArticleImg/WorksArticleImg";
import WorksArticleParagraph from "../worksArticleParagraph/WorksArticleParagraph";
interface IWorksArticle {}

const WorksArticle: FC<IWorksArticle> = ({}) => {
  return (
    <div className={styled.WorksArticle}>
      <WorksArticleImg />
      <WorksArticleParagraph />
    </div>
  );
};

export default WorksArticle;
