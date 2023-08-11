import React, { FC, useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import styled from "./Main.module.css";
import Navbar from "../../components/Navbar/Navbar";
import Home from "../../pages/Home/Home";
import About from "../../pages/About/About";
interface IMain {}
const Main: FC<IMain> = ({}) => {
  return (
    <div className={styled.main}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="About" element={<About />} />
      </Routes>
    </div>
  );
};

export default Main;
