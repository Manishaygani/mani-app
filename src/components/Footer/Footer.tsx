import FooterIntroduction from "../FooterIntroduction/FooterIntroduction";
import FooterLink from "../FooterLink/FooterLink";
import styled from "./Footer.module.css";
import React, { FC, useState, useEffect } from "react";
interface IFooter {}

const Footer: FC<IFooter> = ({}) => {
  return (
    <div className={styled.footer}>
      <FooterIntroduction />
      <FooterLink />
    </div>
  );
};

export default Footer;
