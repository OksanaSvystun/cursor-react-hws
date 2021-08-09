import React, { useState, useEffect } from "react";

import Contact from "./Contact.js";
import contacts from "./data.js";

import "./Contacts.css"

function Contacts() {
  const [allContacts, setContacts] = useState(contacts);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const checkInput = document.querySelectorAll(".sexInput");
    checkInput.forEach((input) => {
      input.checked = true;
    });
  }, []);

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  useEffect(() => {
    const searchQuery = document.querySelector(".searchContact").value;
    const filteredContacts = contacts.filter((contact) => {
      return Object.values(contact).some(
        (item) => item.toString().toLowerCase().search(searchQuery) >= 0
      );
    });
    setContacts(filteredContacts);
  }, [search]);

  return (
    <div className="container-18">
      <h2 className="contacts-header">Contact List</h2>
      <input
        className="searchContact"
        placeholder="Start enter..."
        type="search"
        name="search"
        onChange={handleSearchChange}
        value={search}
      />
      <div className="main-info-container">
        {allContacts.map((contact) => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </div>
    </div>
  );
}

export default Contacts;