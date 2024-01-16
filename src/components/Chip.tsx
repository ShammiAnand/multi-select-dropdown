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
          <span
            style={{
              marginRight: "10px",
            }}
          >
            {contact.name}
          </span>
          <span
            style={{
              fontWeight: "800",
            }}
            onClick={() => handleSelectContact(contact)}
          >
            X
          </span>
        </div>
      ))}
    </div>
  );
}

export default Chip;
