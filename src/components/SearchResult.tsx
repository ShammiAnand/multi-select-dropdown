import React from "react";
import { ContactType } from "../constants/contacts";
import Contact from "./Contact";
import "../styles/SearchResult.css";

interface SearchResultProps {
  filteredContacts: ContactType[];
}

function SearchResult({ filteredContacts }: SearchResultProps) {
  return (
    <div className="search-result-container">
      {filteredContacts.map((contact, index) => {
        return <Contact key={index} contact={contact} />;
      })}
    </div>
  );
}

export default SearchResult;
