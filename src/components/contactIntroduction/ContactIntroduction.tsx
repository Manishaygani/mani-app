import React, { FC, useState, useEffect } from "react";
import styled from "./ContactIntroduction.module.css";
interface IContactIntroduction {}

const ContactIntroduction: FC<IContactIntroduction> = ({}) => {
  return (
    <div className={styled.ContactIntroduction}>
      <p>contact</p>
      <h1>REACH OUT ME</h1>
      <p>
        249 king Sir, 05th Floor, Ultra House Building,<br></br> Melboune, VIC
        3000, London.
      </p>
      <h2>+098 991 059 59 69</h2>
      <h2>mr.mani.shayegani@gmail.com</h2>
    </div>
  );
};

export default ContactIntroduction;
