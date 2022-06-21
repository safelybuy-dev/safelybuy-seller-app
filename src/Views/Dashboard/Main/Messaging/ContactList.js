import React from 'react';
import moment from 'moment';
import { Avatar } from './Avatar';

const Contact = ({ contact, handleContactSelection }) => {
  const { imageUrl, lastMessageTime, name, lastMessage } = contact;
  return (
    <div
      className="flex border-b border-[#E0E0E0] py-5 px-4  cursor-pointer "
      onClick={() => handleContactSelection(contact)}>
      <Avatar image={imageUrl} styles="h-[3.125rem] w-[3.125rem]" />
      <div className="ml-3 flex justify-between items-center flex-1">
        <div className="">
          <h4 className="text-lg">{name}</h4>
          <p className="text-[#828282] text-sm w-[17rem] truncate">
            {lastMessage}
          </p>
        </div>
        <div>
          <small className="text-[#828282]">
            {moment(lastMessageTime).format('LL').split(',')[0]}
          </small>
        </div>
      </div>
    </div>
  );
};

function ContactList({ contacts, handleContactSelection }) {
  return (
    <div>
      {contacts.map((contact) => (
        <Contact
          key={contact.name}
          contact={contact}
          handleContactSelection={handleContactSelection}
        />
      ))}
    </div>
  );
}

export default ContactList;
