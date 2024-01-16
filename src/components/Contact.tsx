import React from "react";
import { AvatarGenerator } from "random-avatar-generator";
import "../styles/Contact.css";
import { ContactType } from "../constants/contacts";

const generator = new AvatarGenerator();

interface ContactProp {
  contact: {
    name: string;
    email: string;
  };
  key: number;
  handleSelectContact: (contact: ContactType) => void;
}

function Contact({ contact, key, handleSelectContact }: ContactProp) {
  return (
    <div
      key={key}
      className="contact-container"
      onClick={() => handleSelectContact(contact)}
    >
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
