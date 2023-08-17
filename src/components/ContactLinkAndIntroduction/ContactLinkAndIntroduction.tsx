import React, { FC, useState, useEffect } from "react";
import styled from "./ContactLinkAndIntroduction.module.css";
import ContactLink from "../ContactLink/ContactLink";
import ContactIntroduction from "../contactIntroduction/ContactIntroduction";
interface IContactLinkAndIntroduction {}

const ContactLinkAndIntroduction: FC<IContactLinkAndIntroduction> = ({}) => {
  return (
    <div className={styled.ContactLinkAndIntroduction}>
      <ContactIntroduction />
      <ContactLink />
    </div>
  );
};

export default ContactLinkAndIntroduction;
