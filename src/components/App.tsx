import React, { useMemo, useState } from "react";
import { CONTACTS } from "../constants/contacts";
import "../styles/App.css";
import SearchResult from "./SearchResult";

function App() {
  const [contacts, setContacts] = useState(CONTACTS);
  const [search, setSearch] = useState("");

  // whenever the user searches for contacts, we update the filtered contacts
  const filteredContacts = useMemo(() => {
    return contacts.filter(
      (contact) =>
        contact.name.toLowerCase().includes(search.toLowerCase()) ||
        contact.email.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <div className="container">
      <div className="center">
        <input
          className="input"
          type="text"
          placeholder="search to filter"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <SearchResult filteredContacts={filteredContacts} />
    </div>
  );
}

export default App;