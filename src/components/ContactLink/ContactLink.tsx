import React, { FC, useState, useEffect } from "react";
import styled from "./ContactLink.module.css";
interface IContactLink {}

const ContactLink: FC<IContactLink> = ({}) => {
  return (
    <div className={styled.ContactLink}>
      <p>Facebook</p>
      <p>Twitter</p>
      <p>Instagram</p>
      <p>Linkedin</p>
    </div>
  );
};

export default ContactLink;
