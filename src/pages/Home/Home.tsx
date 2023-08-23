import React, { FC, useState, useEffect } from "react";
import styled from "../Home/Home.module.css";
import Navbar from "../../components/Navbar/Navbar";
import Links from "../../components/links/Links";
import MyPhoto from "../../components/myPhoto/MyPhoto";
import LinkAndIntroduction from "../../components/LinkAndIntroduction/LinkAndIntroduction";
import Spinner from "../../components/Spinner/Spinner";
interface IHome {}
const Home: FC<IHome> = ({}) => {
  return (
    <div className={styled.Home}>
      <LinkAndIntroduction />
      <MyPhoto />
      <Spinner />
    </div>
  );
};

export default Home;
