import React, { useState } from 'react';
import person1 from 'assets/images/image1.jpeg';
import person2 from 'assets/images/image2.jpeg';
import Chat from './Chat';
import Contacts from './Contacts';

const contacts = [
  {
    name: 'SafelyBuy Agent',
    imageUrl: person1,
    lastMessage: 'We will take a look at it',
    lastMessageTime: Date.now() - 24 * 60 * 60 * 1000,
    messages: [
      {
        text: 'Can you take a look at it?',
        time: Date.now() - 24 * 60 * 60 * 1000,
        sent: true,
      },
      {
        text: 'We will take a look at it',
        time: Date.now() - 24 * 60 * 60 * 1000,
        sent: false,
      },
      {
        text: 'Can you take a look at it?',
        time: Date.now() - 24 * 60 * 60 * 1000,
        sent: true,
      },
      {
        text: 'We will take a look at it',
        time: Date.now() - 24 * 60 * 60 * 1000,
        sent: false,
      },
      {
        text: 'Can you take a look at it?',
        time: Date.now() - 24 * 60 * 60 * 1000,
        sent: true,
      },
      {
        text: 'We will take a look at it',
        time: Date.now() - 24 * 60 * 60 * 1000,
        sent: false,
      },
      {
        text: 'Can you take a look at it?',
        time: Date.now() - 24 * 60 * 60 * 1000,
        sent: true,
      },
      {
        text: 'We will take a look at it',
        time: Date.now() - 24 * 60 * 60 * 1000,
        sent: false,
      },
      {
        text: 'Can you take a look at it?',
        time: Date.now() - 24 * 60 * 60 * 1000,
        sent: true,
      },
      {
        text: 'We will take a look at it',
        time: Date.now() - 24 * 60 * 60 * 1000,
        sent: false,
      },
      {
        text: 'Can you take a look at it?',
        time: Date.now() - 24 * 60 * 60 * 1000,
        sent: true,
      },
      {
        text: 'We will take a look at it',
        time: Date.now() - 24 * 60 * 60 * 1000,
        sent: false,
      },
    ],
    status: 'online',
  },
  {
    name: 'SafelyBuy Doorman',
    imageUrl: person2,
    lastMessage:
      'Your item will be delivered today, please confirm your availability',
    lastMessageTime: Date.now() - 49 * 60 * 60 * 1000,
    messages: [
      {
        text: 'When should I be expecting my delivery?',
        time: Date.now() - 24 * 60 * 60 * 1000,
        sent: true,
      },
      {
        text: 'Your item will be delivered today, please confirm your availability',
        time: Date.now(),
        sent: false,
      },
    ],
    status: 'offline',
  },
];

function Messaging() {
  const [selectedContact, setSelectedContact] = useState(null);

  const handleContactSelection = (data) => {
    setSelectedContact(data);
  };

  return (
    <div className="h-screen mt-12">
      <h2 className="text-[1.5rem] mb-3">Messaging</h2>
      <div className="bg-white md:h-[34rem] overflow-hidden rounded-md flex justify-between p-12">
        <Contacts
          contacts={contacts}
          handleContactSelection={handleContactSelection}
        />
        <Chat selectedContact={selectedContact} />
      </div>
    </div>
  );
}

export default Messaging;
