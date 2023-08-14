import React, { FC, useState, useEffect } from "react";
import axx from "./macos-fusion-8k-7680x4320-12482.jpg";
import styled from "./WorksArticleImg.module.css";
interface IWorksArticleImg {}

const WorksArticleImg: FC<IWorksArticleImg> = ({}) => {
  return (
    <div className={styled.worksArticleImg}>
      <img src={axx} alt="" />
    </div>
  );
};

export default WorksArticleImg;
