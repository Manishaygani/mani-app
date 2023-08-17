import React, { FC, useState, useEffect } from "react";
import myPhoto from "./photo_2023-08-11_04-06-16.jpg";
import styled from "./ContactBox.module.css";
interface IContactBox {}

const ContactBox: FC<IContactBox> = ({}) => {
  return (
    <div className={styled.ContactBox}>
      <img src={myPhoto} alt="myPhoto" />
    </div>
  );
};

export default ContactBox;
