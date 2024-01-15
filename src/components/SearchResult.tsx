import React from "react";
import { ContactType } from "../constants/contacts";
import Contact from "./Contact";

interface SearchResultProps {
  filteredContacts: ContactType[];
}

function SearchResult({ filteredContacts }: SearchResultProps) {
  return (
    <div>
      {filteredContacts.map((contact, index) => {
        return <Contact key={index} contact={contact} />;
      })}
    </div>
  );
}

export default SearchResult;
