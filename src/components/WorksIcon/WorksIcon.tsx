import React, { FC, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import styled from "./WorksIcon.module.css";
interface IWorksIcon {}

const WorksIcon: FC<IWorksIcon> = ({}) => {
  return (
    <div className={styled.WorksIcon}>
      <p>
        <FontAwesomeIcon icon={faArrowUp} />{" "}
      </p>
    </div>
  );
};

export default WorksIcon;
