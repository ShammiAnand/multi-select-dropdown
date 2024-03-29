import { useEffect, useMemo, useState } from "react";
import { CONTACTS, ContactType } from "../constants/contacts";
import "../styles/App.css";
import SearchResult from "./SearchResult";
import Chip from "./Chip";

function App() {
  const [contacts, setContacts] = useState(CONTACTS);
  const [search, setSearch] = useState("");
  const [focused, setFocused] = useState(false);
  const [selectedContacts, setSelectedContacts] = useState<ContactType[]>([]);

  // whenever the user searches for contacts, we update the filtered contacts
  const filteredContacts = useMemo(() => {
    return contacts.filter(
      (contact) =>
        contact.name.toLowerCase().includes(search.toLowerCase()) ||
        contact.email.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, contacts]);

  useEffect(() => {
    // remove selected contacts from contact list
    setContacts(
      contacts.filter((contact) => !selectedContacts.includes(contact))
    );
  }, [selectedContacts]);

  function handleSelectContact(contact: ContactType) {
    if (selectedContacts.includes(contact)) {
      setSelectedContacts(selectedContacts.filter((c) => c !== contact));
      setContacts([...contacts, contact]);
    } else {
      setSelectedContacts([...selectedContacts, contact]);
    }
  }

  return (
    <div className="container">
      <div className="center">
        {!!selectedContacts.length ? (
          <Chip
            selectedContacts={selectedContacts}
            handleSelectContact={handleSelectContact}
          />
        ) : null}
        <input
          className="input"
          type="text"
          placeholder="search to filter"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onFocus={(e) => setFocused(true)}
        />
      </div>
      {focused && (
        <SearchResult
          filteredContacts={filteredContacts}
          handleSelectContact={handleSelectContact}
        />
      )}
    </div>
  );
}

export default App;
