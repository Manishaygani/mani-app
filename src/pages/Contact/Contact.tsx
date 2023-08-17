import React, { FC, useState, useEffect } from "react";
import styled from "./Contact.module.css";
import ContactIntroduction from "../../components/contactIntroduction/ContactIntroduction";
import ContactLink from "../../components/ContactLink/ContactLink";
import ContactBox from "../../components/ContactBox/ContactBox";
import ContactLinkAndIntroduction from "../../components/ContactLinkAndIntroduction/ContactLinkAndIntroduction";
interface IContact {}

const Contact: FC<IContact> = ({}) => {
  return (
    <div className={styled.Contact}>
      <ContactLinkAndIntroduction />
      <ContactBox />
    </div>
  );
};

export default Contact;
