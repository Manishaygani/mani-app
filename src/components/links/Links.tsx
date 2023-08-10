import styled from "./Links.module.css";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import React, { FC, useState, useEffect } from "react";
interface ILinks {}

const Links: FC<ILinks> = ({}) => {
  return (
    <div className={styled.linksss}>
      <p>
        <FontAwesomeIcon icon={faPhone} />
        {"+989910595969"}
      </p>

      <p>
        <FontAwesomeIcon icon={faGoogle} />
        {"mr.mani.shayegani@gmail.com"}
      </p>
    </div>
  );
};

export default Links;
