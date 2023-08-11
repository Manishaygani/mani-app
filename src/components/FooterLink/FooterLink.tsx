import React, { FC, useState, useEffect } from "react";
import styled from "./FooterLink.module.css";
interface IFooterLink {}

const FooterLink: FC<IFooterLink> = ({}) => {
  return (
    <div className={styled.FooterLink}>
      <p>-2018 - Present</p>
      <h2>Lead UI/UX Designer</h2>
      <p>-2018 - 2010</p>
      <h2>Senior UI/UX Designer</h2>
      <p>-2008 - 2006</p>
      <h2>Junior UI/UX Designer</h2>
    </div>
  );
};

export default FooterLink;
