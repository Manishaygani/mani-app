import React, { FC, useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import styled from "./Main.module.css";
import Navbar from "../../components/Navbar/Navbar";
import Works from "../../pages/works/Works";
import Home from "../../pages/Home/Home";
import About from "../../pages/About/About";
import Contact from "../../pages/Contact/Contact";
interface IMain {}
const Main: FC<IMain> = ({}) => {
  return (
    <div className={styled.main}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="About" element={<About />} />
        <Route path="Works" element={<Works />} />
        <Route path="Contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default Main;
