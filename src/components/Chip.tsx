import React from "react";
import { ContactType } from "../constants/contacts";
import "../styles/Chip.css";

interface ChipProps {
  selectedContacts: ContactType[];
  handleSelectContact: (contact: ContactType) => void;
}

function Chip({ selectedContacts, handleSelectContact }: ChipProps) {
  return (
    <div className="chip-container">
      {selectedContacts.map((contact) => (
        <div className="chip">
          <span>{contact.name}</span>
          <span onClick={() => handleSelectContact(contact)}>X</span>
        </div>
      ))}
    </div>
  );
}

export default Chip;
