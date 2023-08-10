import "./App.css";
import "leaflet/dist/leaflet.css";
import Home from "./pages/Home/Home";
import React, { FC, useState, useEffect } from "react";
import Main from "./components/main/Main";
interface IApp {}

const App: FC<IApp> = ({}) => {
  return (
    <>
   <Main/>
    </>
  );
};

export default App;
