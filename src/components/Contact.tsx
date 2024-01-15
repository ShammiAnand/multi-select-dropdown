import React from "react";
import { AvatarGenerator } from "random-avatar-generator";
import "../styles/Contact.css";

const generator = new AvatarGenerator();

interface ContactProp {
  contact: {
    name: string;
    email: string;
  };
  key: number;
}

function Contact({ contact, key }: ContactProp) {
  return (
    <div key={key} className="contact-container">
      <img
        src={generator.generateRandomAvatar(contact.name)}
        alt="avatar"
        className="contact-avatar"
      />
      {contact.name}
      {contact.email}
    </div>
  );
}

export default Contact;
