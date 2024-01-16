import React from "react";
import { ContactType } from "../constants/contacts";
import Contact from "./Contact";
import "../styles/SearchResult.css";

interface SearchResultProps {
  filteredContacts: ContactType[];
  handleSelectContact: (contact: ContactType) => void;
}

function SearchResult({
  filteredContacts,
  handleSelectContact,
}: SearchResultProps) {
  return (
    <div className="search-result-container">
      {filteredContacts.map((contact, index) => {
        return (
          <Contact
            key={index}
            contact={contact}
            handleSelectContact={handleSelectContact}
          />
        );
      })}
    </div>
  );
}

export default SearchResult;
