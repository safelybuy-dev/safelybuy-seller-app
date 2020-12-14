import React from "react";
import ContactList from "./ContactList";
import Search from "./Search";

const Contacts = ({ contacts, setContacts, setSelectedContact }) => {
  return (
    <div className="w-5/12 border-r">
      <Search setContacts={setContacts} />
      <ContactList
        setSelectedContact={setSelectedContact}
        contacts={contacts}
      />
    </div>
  );
};

export default Contacts;
