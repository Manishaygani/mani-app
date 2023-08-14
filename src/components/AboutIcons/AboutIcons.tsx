import React, { FC, useState, useEffect } from "react";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import styled from "./AboutIcons.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
interface IAboutIcons {}

const AboutIcons: FC<IAboutIcons> = ({}) => {
  return (
    <div className={styled.AboutIcons}>
      <p>
        <FontAwesomeIcon icon={faUser} />
        18 yrs
      </p>
      <p>
        <FontAwesomeIcon icon={faMapMarkerAlt} />
        iran,tehran
      </p>
    </div>
  );
};

export default AboutIcons;
