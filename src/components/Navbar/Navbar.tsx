import { Link } from "react-router-dom";
import React, { FC, useState, useEffect } from "react";
import styled from "../Navbar/Navbar.module.css";
interface INavbar {}

const Navbar: FC<INavbar> = ({}) => {
  return (
    <ul className={styled.navbar}>
      <h2>BOYCOTT.</h2>
      <a href="/">
        <li>home</li>
      </a>
      <a href="About">
        <li>about</li>
      </a>
      <a href="">
        {" "}
        <li>works</li>
      </a>
      <a href="">
        <li>blogs</li>
      </a>
      <a href="">
        {" "}
        <li>contact</li>
      </a>
    </ul>
  );
};

export default Navbar;
