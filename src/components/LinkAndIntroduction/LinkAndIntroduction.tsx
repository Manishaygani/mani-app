import React, { FC, useState, useEffect } from "react";
import styled from "./LinkAndIntruduction.module.css";
import Links from "../links/Links";
import Introduction from "../introduction/Introduction";
interface ILinkAndIntroduction {}

const LinkAndIntroduction: FC<ILinkAndIntroduction> = ({}) => {
  return (
    <div className={styled.LinkAndIntroduction}>
      <p>
        <Introduction />
      </p>
      <p>
        <Links />
      </p>
    </div>
  );
};

export default LinkAndIntroduction;
