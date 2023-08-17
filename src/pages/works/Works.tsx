import React, { FC } from "react";
import styled from "./Works.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import WorksIntroduction from "../../components/worksIntroduction/WorksIntroduction";
import WorksArticle from "../../components/worksArticle/WorksArticle";
interface IWorks {}

const Works: FC<IWorks> = ({}) => {
  const [articles, setArticles] = useState();
  useEffect(() => {
    axios.get("http://localhost:8000/ArticlesData").then((result) => {
      setArticles(result.data.data);
    });
  }, []);
  return (
    <div className={styled.works}>
      <WorksIntroduction />
      {/* <div className={styled.arrticle}>
        {articles.map((result: any) => (
          <WorksArticle />
        ))}
      </div> */}
    </div>
  );
};

export default Works;
