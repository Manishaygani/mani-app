import React, { FC } from "react";
import styled from "./Works.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import WorksIntroduction from "../../components/worksIntroduction/WorksIntroduction";
import WorksArticle from "../../components/worksArticle/WorksArticle";
interface IWorks {}

const Works: FC<IWorks> = ({}) => {
  const [artiicles, setArtiicles] = useState([] as any);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/todos").then((result) => {
      setArtiicles(result.data);
    });
  }, []);
  console.log(artiicles);
  return (
    <div className={styled.works}>
      <WorksIntroduction />
      <div className={styled.artiicles}>
        {artiicles?.map((result: any) => (
          <WorksArticle title={result.title} />
        ))}
      </div>
    </div>
  );
};

export default Works;
