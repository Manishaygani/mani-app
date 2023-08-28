import { Link } from "react-router-dom";
import React, { FC, useState, useEffect } from "react";
import styled from "../Navbar/Navbar.module.css";
import Hamburger from "hamburger-react";
import { Button } from "antd";
interface INavbar {}
const Navbar: FC<INavbar> = ({}) => {
  const curentWidth = window.innerWidth;
  console.log(curentWidth);
  const [toggle, setToggle] = useState(false);
  console.log(toggle);
  return (
    <>
      <div
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        <Hamburger size={30} />
      </div>
      {toggle && (
        <ul className={styled.navbar}>
          <h2>BOYCOTT.</h2>
          <a href="/">
            <li>home</li>
          </a>
          <a href="About">
            <li>about</li>
          </a>
          <a href="works">
            {" "}
            <li>works</li>
          </a>
          <a href="Contact">
            {" "}
            <li>contact</li>
          </a>
        </ul>
      )}
    </>
  );
};

export default Navbar;
