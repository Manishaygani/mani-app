import photo from "./photo_2023-08-08_13-20-57.jpg";
import styled from "./MyPhoto.module.css";
import React, { FC, useState, useEffect } from "react";
interface IMyPhoto {}
const MyPhoto: FC<IMyPhoto> = ({}) => {
  return (
    <div className={styled.photo}>
      <img src={photo} alt="my photo" />
    </div>
  );
};

export default MyPhoto;
